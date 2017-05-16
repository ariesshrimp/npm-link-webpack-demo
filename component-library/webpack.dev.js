const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/playground/index.js',
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [/node_modules/],
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][local]_[hash:base64:5]',
              },
            },
          ],
          exclude: /node_modules/,
        },
      ]
    },
    devServer: {
      overlay: true,
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'components.css',
        allChunks: true,
      }),
      new HtmlWebpackPlugin({
        title: 'Playground'
      })
    ]
  }