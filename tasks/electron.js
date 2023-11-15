"use strict";
const electronPackager = require("@electron/packager");

module.exports = (grunt) => {
	grunt.registerMultiTask(
		"electron",
		"Package Electron apps",
		async function () {
			const done = this.async();

			try {
				const appPaths = await electronPackager(this.options());

				console.log(`Electron app bundles created:\n${appPaths.join("\n")}`);
				done();
			} catch (error) {
				grunt.warn(error);
				done();
			}
		},
	);
};
