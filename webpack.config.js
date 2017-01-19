const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/js'),
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './public/assets'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  }
};
