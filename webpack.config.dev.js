const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./example'],
  },
  devServer: {
    hot: true,
    inline: true,
    quiet: true,
  },
  output: {
    path: path.resolve(__dirname, '/'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
