module.exports = function( grunt ) {
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),
        browserify: {
            lib: {
                src: [],
                dest: 'demo/lib.js',
                options: {
                    require: [ 'underscore', 'd3' ]
                }
            },

            demo: {
                files: {
                    'demo/demo.js': [ 'demo/index.js' ]
                },
                options: {
                    browserifyOptions: {
                        debug: true,
                        bundleExternal: false
                    },
                    transform: [ [ 'babelify', { presets: [ 'es2015' ] } ] ]
                }
            },

            build: {
                files: {
                    'ddd.js': [ 'src/**/*.js' ]
                },
                options: {
                    transform: [ [ 'babelify', { presets: [ 'es2015' ] } ] ],
                    browserifyOptions: {
                        debug: true,
                        bundleExternal: false
                    }
                }
            }
        },

        watch: {
            demo: {
                files: [ 'src/**/*.js', 'demo/index.js' ],
                tasks: [ 'browserify:demo', 'notify:demo' ]
            },

            build: {
                files: [ 'src/**/*.js' ],
                tasks: [ 'browserify:build', 'notify:build' ]
            }
        },

        notify: {
            demo: {
                options: {
                    title: 'Demo Complete',
                    message: 'Changes to demo have been compiled.'
                }
            },

            build: {
                options: {
                    title: 'Build Complete',
                    message: 'Changes to build have been compiled.'
                }
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-notify' );

    grunt.registerTask( 'default', [ 'browserify:build', 'watch:build' ] );
    grunt.registerTask( 'demo', [ 'browserify:demo', 'browserify:lib', 'watch:demo' ] );
};
