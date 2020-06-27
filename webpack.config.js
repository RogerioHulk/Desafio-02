const path = require('path');
//const webpack = require('webpack');
//const _ = require('lodash');
//const WebpackNotifierPlugin = require('webpack-notifier');
//const WebpackShellPlugin = require('webpack-shell-plugin');
//const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  entry : path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader', }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:[
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: { loader: 'file-loader', }
      },
    ]
  }
};
