const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/js'),
  entry: [
    './app.js',
    'tether'
  ],
  output: {
    path: path.resolve(__dirname, './public/assets'),
    publicPath: '/assets',
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }]
      },
      {
        test: /\.scss$/,
        exclude:/node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
      { test: /\.(ttf|eot)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "window.Tether": "tether"
    })
  ]
};
