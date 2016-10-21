const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'react-teleportation',
    libraryTarget: 'umd',
    filename: 'dist/react-teleportation.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }})
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom",
    "lodash": "lodash",
    "styled-components": "styled-components",
  }
}
