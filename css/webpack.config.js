const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'app/index.js'),
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 9000
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
      template: path.resolve(__dirname, 'app/index.html'),
    }),
    new CopyWebpackPlugin([{
      from: 'app/img',
      to: 'img/'
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new CleanWebpackPlugin()
  ]
};