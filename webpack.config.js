'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/JS/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/JS'
  },
  watch: true,

  devtool: "source-map",

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              corejs: 3,
              useBuiltIns: "usage"
            }]]
          }
        }
      }
    ]
  }
};
