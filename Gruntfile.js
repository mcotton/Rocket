module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                seperator: ''
            },
            dist: {
                files: {
                    'js/models.js':         ['js/models/*.js'],
                    'js/collections.js':    ['js/collections/*.js'],
                    'js/views.js':          ['js/views/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);
}
