const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(process.cwd(), dir)
}

module.exports = {
  entry: {
    main: resolve("index.js")
  },
  output: {
    path: resolve('build'),
    filename: '[name].[hash].js',
    publicPath: "./"
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': resolve('src')
    }
  },
  target: 'web',
  stats: {
    colors: true
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /webpack/, /Gruntfile/]
    }]
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("index.html"),
      inject: true
    })
  ]
}