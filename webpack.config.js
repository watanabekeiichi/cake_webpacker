var webpack = require("webpack");
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: {
    javascript: './src/Javascript/index.js',
  },
  output: {
    path:path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // Configuration for dev server
  devServer: {
    disableHostCheck: true,
    port: 3000,
    progress        : true,
    inline          : true,
    clientLogLevel  : 'info',
    contentBase     : path.join(__dirname, 'dist'),
    publicPath      : '/',
    headers: {
      "Access-Controll-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Header" : "X-DEBUGKIT-ID",
    },
  },
  module: {
    rules: [
        {
          test: /\.ctp$/,
          loader: 'html-loader',
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            process.env.NODE_ENV !== 'production'
              ? 'vue-style-loader'
              : MiniCssExtractPlugin.loader,
            'css-loader'
          ]
          // loader: 'css-loader',
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: 'vue-style-loader!css-loader!',
            },
            // extractCSS: true,
          },
        },
        {
          test: /\.(jpg|png)$/,
          loader: 'url-loader',
        }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ],
  resolve: {
    modules: [
      'node_modules',
    ],
  },
}
