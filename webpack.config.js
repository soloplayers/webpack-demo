const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	devtool:'inline-source-map', 
	entry: "./src/index.js",
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename:'index.[contenthash].js'
	},	
	plugins: [new HtmlWebpackPlugin({
		title: "方方",
		template:"./src/assets/index.html"
	})],
	module: {
		rules: [
			{
				test: /\.css/i,
				use: ["style-loader", "css-loader"]
			}
		]
	}
}