const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    publicPath: '',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
    }),
    new ESLintPlugin({
      emitWarning: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif|webp|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name].[hash].[ext][query]',
        },
      },
    ],
  },
};
