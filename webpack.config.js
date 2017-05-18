/**
 * Created by issuser on 2017/5/18.
 */
var path = require('path');

module.exports = {
	entry:'./index.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')
	}
};