const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, 'app/index.js'),
  mode: 'production',
  output: {
    filename: 'index.js',
    path: resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'index.html',
      template: resolve(__dirname, 'app/index.html'),
    }),
    new CopyWebpackPlugin([{
      from: 'app/img',
      to: 'img/'
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new CleanWebpackPlugin()
  ]
};