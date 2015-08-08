"use strict";

module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		jshint: {
			server: {
				src: ["Gruntfile.js", "index.js", "server/**/*.js"],
				options: {
					node: true,
					mocha: true
				}
			},
			client: {
				src: ["public/**/*.js"],
				options: {
					browser: true,
					globals: {
						angular: true,
						console: true
					}
				}
			}
		},
		mochacli: {
			options: {
				require: ['should']
			},
			server: {
				src: ["test/server/**/*.js"]
			},
			client: {
				src: ["test/client/**/*.js"]
			}
		},
		karma: {
			all: {
				configFile: "karma.conf.js",
				singleRun: true
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-mocha-cli");
	grunt.loadNpmTasks("grunt-karma");

	grunt.registerTask("default", ["jshint", "mochacli"]);
	grunt.registerTask("test", ["jshint", "mochacli", "karma"]);
};

