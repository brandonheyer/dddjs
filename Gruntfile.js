module.exports = function( grunt ) {
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        browserify: {
            build: {
                files: {
                    'ddd.js': [ 'src/**/*.js' ]
                },
                options: {
                    transform: [ [ 'babelify', { presets: [ 'es2015' ] } ] ]
                }
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.registerTask( 'default', [ 'browserify' ] );
};
