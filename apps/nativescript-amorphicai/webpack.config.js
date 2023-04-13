const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {

  webpack.init(env);
  webpack.useConfig('angular');

  webpack.chainWebpack((config) => {
    // shared scss
    config.resolve.alias.set('@amorphicai-workspace/xplat-scss', resolve(__dirname, '../../libs/xplat/scss/src/'));
    config.resolve.alias.set('@amorphicai-workspace/xplat-nativescript-scss', resolve(__dirname, '../../libs/xplat/nativescript/scss/src/'));

    // Polyfills
    // $ npm install -D assert browserify-zlib crypto-browserify https-browserify os-browserify
    // path-browserify stream-browserify stream-http url util
    config.resolve.set('fallback', {
      assert: require.resolve("assert/"),
      crypto: require.resolve('crypto-browserify'),
      dns: false,
      fs: false,
      http: require.resolve("stream-http"),
      http2: false,
      https: require.resolve("https-browserify"),
      net: false,
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      tls: false,
      url: require.resolve("url/"),
      util: require.resolve('util/'),
      zlib: require.resolve("browserify-zlib"),
    });
  });

  return webpack.resolveConfig();
};
