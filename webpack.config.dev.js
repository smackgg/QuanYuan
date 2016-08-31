var path = require('path');
var webpack = require('webpack');
var config = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
    'webpack-dev-server/client?http://127.0.0.1:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    publicPath: "http://127.0.0.1:8080/dist/",
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      exclude: /(node_modules)/,
      loaders: ["style", "css?sourceMap", "postcss", "sass?sourceMap"],
    },
    {
      test: /\.less$/,
      exclude: /(node_modules)/,
      loader: "style!css!less"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;