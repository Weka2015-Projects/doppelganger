module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Configure a mochaTest task
    sass: {
       dist: {
         options: {
           style: 'expanded'
         },
         files: {
           'app/styles/main.css': 'styles/main.scss'
         }
       }
    }
  });

  grunt.registerTask('default', ['mochaTest', 'sass']);

};
