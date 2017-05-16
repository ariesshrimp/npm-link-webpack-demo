const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
    entry: './src/components/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'components.js',
      libraryTarget: 'commonjs-module'
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
          use: ExtractTextPlugin.extract({
            fallback: {
              loader: 'style-loader',
              options: {singleton: true},
            },
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[path][local]_[hash:base64:5]',
                },
              },
            ],
          }),
          exclude: /node_modules/,
        },
      ],
    },
    devServer: {
      overlay: true,
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'components.css',
        allChunks: true,
      }),
    ]
  }