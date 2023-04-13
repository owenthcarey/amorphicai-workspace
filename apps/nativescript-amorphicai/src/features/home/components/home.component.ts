import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

import {BaseComponent, TensorflowService} from '@amorphicai-workspace/xplat/core';
import {PanGestureEventData, Screen, StackLayout, View} from '@nativescript/core';
import {Canvas} from '@nativescript/canvas';

@Component({
  moduleId: module.id,
  selector: 'amorphicai-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent {
  @ViewChild('topCard', {read: ElementRef}) topCard: ElementRef;
  @ViewChild('bottomCard', {read: ElementRef}) bottomCard: ElementRef;
  // @ViewChild('canvas', {read: ElementRef}) canvas: ElementRef;

  images = [
    'https://via.placeholder.com/300x200/FF5733',
    'https://via.placeholder.com/300x200/FFBD33',
    'https://via.placeholder.com/300x200/75FF33',
    'https://via.placeholder.com/300x200/33FF57',
  ];

  topImageUrl = this.images[0];
  bottomImageUrl = this.images[1];
  imageIndex = 1;

  constructor(private tensorflowService: TensorflowService) {
    super();
  }

  async onCanvasReady(args) {
    console.log('onCanvasReady()');
    const canvas = args.object as Canvas;
    const webGLRenderingContext = canvas.getContext('webgl2') as unknown as WebGLRenderingContext
    await this.tensorflowService.init(webGLRenderingContext);
    this.tensorflowService.multiplyMatrices();
    // this.tensorflowService.loadAndFineTuneModel();
  }

  onPan(args: PanGestureEventData) {
    const topCard = this.topCard.nativeElement as StackLayout;
    topCard.translateX = args.deltaX;
    topCard.translateY = args.deltaY;

    if (args.state === 2) {
      // Ended
      // const screenWidth = topCard.getMeasuredWidth() * (topCard.parent as View).getMeasuredWidth() / 100;
      const screenWidth = Screen.mainScreen.widthDIPs;
      const threshold = screenWidth / 4;

      if (Math.abs(args.deltaX) > threshold) {
        this.updateImages();
      }

      topCard.animate({
        translate: {x: 0, y: 0},
        duration: 200,
      });
    }
  }

  updateImages() {
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
    this.bottomImageUrl = this.topImageUrl;
    this.topImageUrl = this.images[this.imageIndex];
  }
}
