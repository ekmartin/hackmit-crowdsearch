/* eslint-disable */
var path = require('path');
module.exports = {
  output: {
    path: __dirname + '/../public',
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../'),
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.json', '.css', '.png']
  },
  module: {
    loaders: [
      { include: /\.json$/, loaders: ['json-loader'] },
      { test: /\.jsx?$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png' }
    ]
  }
};
