'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    // Linting
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      src: ['Gruntfile.js', 'tasks/*.js', 'package.json']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint']);
};
