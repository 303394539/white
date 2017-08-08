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
  });
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', [
    'webpack:dev'
  ]);
}