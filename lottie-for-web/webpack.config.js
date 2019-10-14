const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    app: './src/js/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'src' },
    ])
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[
      {
          test:/\.(s*)css$/,
          use:['style-loader','css-loader', 'sass-loader']
       }
    ]
  }
};