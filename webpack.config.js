const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js'
  }
};
