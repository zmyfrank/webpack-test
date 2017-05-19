/**
 * Created by issuser on 2017/5/18.
 */
var path = require('path');
const HtmlWebpackPlugin = required('')
module.exports = {
	entry:'./index.js',
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules:[
			{
				test: /\.css$/,
				use:[
					{loader: "css-loader"},
					{loader: "style-loader",options:{modules:true}}
				]
			},
			
		]
	}
};