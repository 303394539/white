module.exports = function(grunt) {

  const pkg = grunt.file.readJSON("package.json");
  const webpackConfig = require('./webpack.config');

  grunt.initConfig({
    pkg: pkg,

    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({
        watch: true
      }, webpackConfig)
    },

    "webpack-dev-server": { //开发调试，实时编译
      options: {
        webpack: webpackConfig
      },
      start: {
        keepalive: true,
        port: 8000,
        historyApiFallback: true,
        noInfo: true,
        inline: true,
        hot: true,
        compress: true,
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1000
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', [
    'webpack-dev-server'
  ]);
}