//lets set up our webpack file.
const path = require("path");

module.exports = {
	//me must have an entry and an output
	mode: "development",
	entry: "./src/js/script.js",
	output: {
		filename: "script.js",
		path: path.resolve(__dirname, "dist"), //this will resolve an absolute path to the folder
	},
};

//its running in production mode by default thats why the code is minified
//** the devtool:"none"  option takes out the eval from the final build process  */
