const path = require('path');
const outputDir = path.join(__dirname, '..', 'dist');

module.exports = {
  output: {
    path: outputDir,
    filename: '[name].js',
    publicPath: './',
  },
  module: {
    rules: [
      // Set up Reason and OCaml files to use the loader
      { test: /\.(re|ml)$/, use: 'bs-loader' },
    ],
  },
  resolve: {
    // Add .re and .ml to the list of extensions webpack recognizes
    extensions: ['.re', '.ml', '.js'],
  },
};
