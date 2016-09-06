var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var config = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/index.js'),
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    publicPath: 'http://0.0.0.0:8080/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    historyApiFallback: true,
    stats: {
      chunks: false,
    },
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "postcss", "sass?sourceMap"],
    },
    {
      test: /\.css$/,
      loaders: ["style", "css?sourceMap"],
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function () {
    return [precss, autoprefixer];
  }
};

module.exports = config;
