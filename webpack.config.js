const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === 'development'
const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`

const optimization = () => {
  const config = {}
  if (!isDev) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

module.exports = {
  context: path.join(__dirname, '/src/frontend'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: filename('js'),
  },
  resolve: {
    extensions: ['.js', '.png']
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    hot: isDev,
    historyApiFallback: true,
  },
  devtool: isDev ? 'source-map' : false,
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: !isDev
    }),
    new MiniCssExtractPlugin({
      filename: `stylesheets/${filename('css')}`
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [{from: path.resolve(__dirname, 'src/frontend/assets/icons/favicon.ico'), to: path.relative(__dirname, 'assets/icons')}],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["babel-plugin-styled-components"]
          },
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|jpg|png|gif)$/,
        use: ['file-loader'],
      }
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
