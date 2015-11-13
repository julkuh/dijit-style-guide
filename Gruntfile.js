/* global module */
module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        myTask: {},

        // install dojo deps
        'bower-install-simple': {
            options: {
                color: true,
                directory: './'
            },
            main: {
                options: {
                    production: false
                }
            }
        },

        // connect and open dev app
        connect: {
            styleguide: {
                options: {
                    port: 3000,
                    base: './',
                    hostname: '*'
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
                files: ['**/*.html'],
                styleguidetasks: []
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
        'connect:styleguide',
        'open:styleguide',
        'watch:styleguide'
    ]);
};