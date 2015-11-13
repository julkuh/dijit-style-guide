/* global module */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        myTask: {},

        // connect and open dev app
        connect: {styleguide: {
                options: {
                    port: 3000,
                    base: './',
                    hostname: '*',
                    livereload: true
                }
            }
        },

        open: {
            styleguide: {
                path: 'http://localhost:3000/style-guide.html'
            }
        },

        watch: {
            styleguide: {
                options: {
                    livereload: true
                },
                files: ['**/*.html']
            },
        }
    });

    // load tasks
    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // default run dijit theme tester
    grunt.registerTask('default', [
        'connect',
        'open:styleguide',
        'watch:styleguide'
    ]);
};