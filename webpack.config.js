const path = require('path');

function resolve(dir) {
  return path.join(process.cwd(), dir)
}

module.exports = {
  entry: {
    main: resolve("index.js"),
    white: [resolve("src/core.js")]
  },
  output: {
    path: resolve('build'),
    filename: '[name].js',
    publicPath: "./"
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /webpack/, /Gruntfile/]
    }]
  }
}