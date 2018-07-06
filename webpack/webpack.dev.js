const path = require('path');
const webpack = require('webpack');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const isDevServer = process.argv.find(v => v.includes('webpack-dev-server'));


module.exports = merge(commonConfig, {
  entry: isDevServer ?
    [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.re',
    ] : [
      './src/main.re',
    ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
    watchOptions: {
      ignored: [
        /node_modules/,
        /dist/,
      ],
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
