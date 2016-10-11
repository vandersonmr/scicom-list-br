module.exports = function(grunt) {
  var project_files = {
      javascript: [
        '!./app/app.min.js',
        '!./app/view/',
        './app/app.js',
        './app/directives/*.js',
        './app/factory/*.js',
        './app/filter/*.js',
        './app/controller/*.js',
        './app/routes.js',
      ],
      stylesheet: [
        '!./assets/css/app.min.css',
        './assets/css/bootstrap.css',
        './assets/css/app.css',
      ],
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*===================================================== \n'
                +'= <%= pkg.name %> \n'
                +'= by <%= pkg.homepage %> \n'
                +'= [LAST BUILD: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>] \n'
                +'=====================================================*/\n'
      },
      build: {
        src: project_files.javascript,
        dest: './app/app.min.js'
      },
    },
    cssmin : {
      options : {
        keepSpecialComments: 0,
        rebase: true,
      },
      dist: {
        src: project_files.stylesheet,
        dest: './assets/css/app.min.css',
      }
    },
    watch: {
      scripts: {
        files: [project_files.javascript, project_files.stylesheet],
        tasks: ['default']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'cssmin']);

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });
};
