module.exports = function (grunt) {
  'use strict';

  grunt.registerMultiTask('bashlint', 'Lint Bash files', function() {
    var exec = require('child_process').exec,
      done = this.async(),
      files = grunt.file.expandFiles(this.file.src),
      runs = 0, success = true;

    files.forEach(function(filepath) {
      exec('bash -n ' + filepath, function(err, stdout, stderr) {
        if (null !== err) {
          success = false;
          console.log(stderr);
        }
        if (++runs === files.length) done(success);
      });
    });
  });
};
