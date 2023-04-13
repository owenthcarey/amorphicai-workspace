import {Injectable} from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {
  GPGPUContext,
  MathBackendWebGL,
  setWebGLContext,
} from '@tensorflow/tfjs-backend-webgl';

@Injectable({
  providedIn: 'root',
})
export class TensorflowService {
  async init(webGLRenderingContext: WebGLRenderingContext) {
    try {
      // Register back end.
      tf.registerBackend('custom-webgl', async () => {
        setWebGLContext(2, webGLRenderingContext);
        const customGPGPUContext = new GPGPUContext();
        return new MathBackendWebGL(customGPGPUContext);
      });

      // Register kernels.
      const kernels = tf.getKernelsForBackend('webgl');
      kernels.forEach((kernelConfig) => {
        const newKernelConfig
          = Object.assign({}, kernelConfig, {backendName: 'custom-webgl',});
        tf.registerKernel(newKernelConfig);
      });

      // Set back end and platform.
      await tf.setBackend('custom-webgl');
      tf.setPlatform('nativescript', new NativescriptPlatform());
      await tf.ready();
      console.log('TensorFlow.js is ready with back end:', tf.getBackend());
    } catch (error) {
      console.error('Failed to set the back end to custom-webgl:', error);
    }
  }

  multiplyMatrices() {
    const a = tf.tensor2d([[1, 2], [3, 4]]);
    const b = tf.tensor2d([[5, 6], [7, 8]]);
    const result = tf.matMul(a, b);
    console.log('Matrix multiplication result:', result);
    result.array().then(array => {
      console.log('Matrix multiplication result:', array);
    });
    a.dispose();
    b.dispose();
    result.dispose();
  }

  async loadAndFineTuneModel(numEpochs = 10, batchSize = 32) {
    console.log('Loading model...');
    const model = await this.loadModel();
    console.log('Model loaded. Fine-tuning model...');
    const {images, labels} = await this.loadMnistData();
    console.log('MNIST data loaded. Fine-tuning model...');
    await this.fineTuneModel(model, images, labels, numEpochs, batchSize);
    console.log('Model fine-tuning completed.');
  }

  private async loadModel(): Promise<tf.LayersModel> {
    console.log('Loading base model...');
    const model = await tf.loadLayersModel(
      'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json',
      {
        onProgress: (fraction) => {
          console.log(`Download progress: ${(fraction * 100).toFixed(2)}%`);
        }
      }
    );
    console.log('Base model loaded. Truncating and creating new output layer...');
    const layer = model.getLayer('conv_pw_13_relu');
    const truncatedModel = tf.model({inputs: model.inputs, outputs: layer.output});
    const NUM_CLASSES = 10;
    const newOutputLayer = tf.layers.dense({
      units: NUM_CLASSES,
      activation: 'softmax',
      kernelInitializer: 'varianceScaling',
      useBias: true
    });
    const newOutput = newOutputLayer.apply(truncatedModel.output) as tf.SymbolicTensor;
    const fineTuningModel = tf.model({inputs: truncatedModel.inputs, outputs: newOutput});
    console.log('Fine-tuning model compiled.');
    fineTuningModel.compile({
      optimizer: tf.train.adam(0.0001),
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    return fineTuningModel;
  }

  private async loadMnistData(): Promise<{ images: tf.Tensor4D[]; labels: tf.Tensor1D[] }> {
    console.log('Fetching MNIST data...');
    const trainImagesUrl = 'http://yann.lecun.com/exdb/mnist/train-images-idx3-ubyte.gz';
    const trainLabelsUrl = 'http://yann.lecun.com/exdb/mnist/train-labels-idx1-ubyte.gz';
    const [trainImagesResponse, trainLabelsResponse] = await Promise.all([
      fetch(trainImagesUrl),
      fetch(trainLabelsUrl)
    ]);
    const [trainImagesArrayBuffer, trainLabelsArrayBuffer] = await Promise.all([
      trainImagesResponse.arrayBuffer(),
      trainLabelsResponse.arrayBuffer()
    ]);
    const trainImages = new Uint8Array(trainImagesArrayBuffer);
    const trainLabels = new Uint8Array(trainLabelsArrayBuffer);
    const numImages = 1000;
    const imageHeight = 28;
    const imageWidth = 28;
    const images = [];
    const labels = [];
    console.log('Processing MNIST data...');
    for (let i = 0; i < numImages; i++) {
      const image = tf.tidy(() => {
        const img = tf.tensor(
          trainImages.slice(i * imageHeight * imageWidth + 16, (i + 1) * imageHeight * imageWidth + 16),
          [imageHeight, imageWidth],
          'int32'
        );
        const normalizedImg = tf.cast(img, 'float32').div(tf.scalar(255));
        return normalizedImg.reshape([1, ...normalizedImg.shape, 1]);
      });
      images.push(image);
      const label = tf.tidy(() => {
        const lbl = tf.scalar(trainLabels[i + 8], 'int32');
        return tf.oneHot(lbl, 10).as1D();
      });
      labels.push(label);
    }
    return {images, labels};
  }

  private async fineTuneModel(
    model: tf.LayersModel,
    images: tf.Tensor4D[],
    labels: tf.Tensor1D[],
    numEpochs = 10,
    batchSize = 32
  ) {
    const datasetSize = images.length;
    const numBatchesPerEpoch = Math.ceil(datasetSize / batchSize);
    console.log('Starting fine-tuning...');
    for (let epoch = 0; epoch < numEpochs; epoch++) {
      console.log(`Epoch ${epoch + 1} / ${numEpochs}`);
      const indices = tf.util.createShuffledIndices(datasetSize);
      const indicesArray = Array.from(indices);
      const shuffledImages = indicesArray.map(i => images[i]);
      const shuffledLabels = indicesArray.map(i => labels[i]);
      for (let batch = 0; batch < numBatchesPerEpoch; batch++) {
        const start = batch * batchSize;
        const end = Math.min(start + batchSize, datasetSize);
        const batchImages = tf.stack(shuffledImages.slice(start, end));
        const batchLabels = tf.stack(shuffledLabels.slice(start, end));
        console.log(`Batch ${batch + 1} / ${numBatchesPerEpoch}`);
        await model.fit(batchImages, batchLabels, {epochs: 1, batchSize});
        batchImages.dispose();
        batchLabels.dispose();
        console.log(`Batch ${batch + 1} / ${numBatchesPerEpoch}`);
      }
    }
  }
}

export class NativescriptPlatform implements tf.Platform {
  fetch(
    path: string,
    requestInits?: RequestInit,
    options?: tf.io.RequestDetails
  ): Promise<Response> {
    return fetch(path, requestInits);
  }

  now(): number {
    return performance.now();
  }

  encode(text: string, encoding: string): Uint8Array {
    return new (TextEncoder as any)(encoding).encode(text);
  }

  decode(bytes: Uint8Array, encoding: string): string {
    return new (TextDecoder as any)(encoding).decode(bytes);
  }

  setTimeoutCustom?(functionRef: Function, delay: number): void {
    setTimeout(functionRef, delay);
  }

  isTypedArray(a: unknown): a is Uint8Array | Float32Array | Int32Array
    | Uint8ClampedArray {
    return a instanceof Float32Array || a instanceof Int32Array ||
      a instanceof Uint8Array || a instanceof Uint8ClampedArray;
  }
}