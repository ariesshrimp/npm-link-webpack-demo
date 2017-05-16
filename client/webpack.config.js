const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      },
    ],
  },
  devServer: {
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Meridian Client',
      template: './src/index.html'
    })
  ],
}
