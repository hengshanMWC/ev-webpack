const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base')
module.exports = merge(base, {
	// devtool: 'inline-source-map',
  plugins: [
		//打包的时候，根据output清除目录
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'ev',//无用
			// filename: 'index.html',
			template: 'src/index.html',
			hass: true,//无用
			favicon: 'static/favicon.ico',
			// minif: {//无用
			// 	caseSensitive: false,//是否大小写敏感                
			// 	collapseWhitespace: true,//是否去除空格                
			// 	removeAttributeQuotes: true,// 去掉属性引用               
			//     removeComments: true,//去注释
			// }
		}),
 		// 将css提取到自己的文件中
		new MiniCssExtractPlugin(),
	],
})