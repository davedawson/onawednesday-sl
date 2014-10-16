module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    image_resize: {
      options: {
        width: 500,
        height: 350,
        overwrite: true
      },
      src: 'img/interviews/*.jpg',
      dest: 'img/thumbs/'
    },
    responsive_images: {
      myTask: {
        options: {
          sizes: [{
            width: 500,
            height: 350
          },{
            name: 'medium',
            width: 800
          }]
        },
        files: [{
          expand: true,
          src: ['img/interviews/**.{jpg,gif,png}'],
          dest: '/thumbs/'
        }]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-image-resize');
  grunt.loadNpmTasks('grunt-responsive-images');
  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  // grunt.registerTask('default', ['image_resize']);
  grunt.registerTask('default', ['responsive_images']);


};
