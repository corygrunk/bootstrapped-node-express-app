// Gruntfile.js

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Compile LESS to CSS
    less: {
      build: {
        files: {
          'public/css/main.css': 'public/less/main.less'
        }
      }
    },
    watch: {
      // for stylesheets, watch css and less files
      // only run less and cssmin
      stylesheets: {
        files: ['public/css/*.css', 'public/less/*.less'],
        tasks: ['less']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};