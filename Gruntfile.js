"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reporter: require("jshint-stylish")
      },
      gruntfile: {
        src: "Gruntfile.js"
      }
    },
    typescript: {
      src: {
        src: [ "*.ts", "!*.d.ts" ],
        options: {
          module: "commonjs",
          sourceMap: true
        }
      }
    }
  });

  grunt.registerTask("lint", [ "jshint" ]);
  grunt.registerTask("default", [ "build" ]);
  grunt.registerTask("build", [ "lint", "newer:typescript" ]);
};
