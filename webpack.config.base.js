const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'index.[contenthash].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: '方方',
			template: './src/assets/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use:[
					'file-loader'
				]
			},
			{
				test:/\.styl$/,
				use:[
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.less$/i,
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				]
			},
			{
				test: /\.scss$/i,
				use: [
					// create `style` nodes from js
					'style-loader',
					//Translates css into CommonJs
					'css-loader',
					// compiles Sass to Css
					{
						loader: 'sass-loader',
						options: {
							implementation: require('dart-sass')
						}
					}
				]
			}
		]
	}
};