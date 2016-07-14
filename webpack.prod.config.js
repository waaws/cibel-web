var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 context: __dirname,
 entry: './index.js',

 output: {
  path: path.resolve(__dirname + '/dist/'),
  // esto es para webpack-dev-server
  publicPath: '/dist/',
  filename: 'bundle.js'
 },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style','css?-url!postcss!less?rootpath=./dist/')
      },
    ]
  },

 // esto guardalo para cuando uses el router de angular
 // devServer: {
 //  historyApiFallback: true
 // }
}
