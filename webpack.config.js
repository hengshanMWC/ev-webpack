const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'ev'),
		filename: 'main.js',
		publicPath: './'
	},
	resolve: {
	  // extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css'],
	  alias: {
	    '@' :path.resolve(__dirname, 'src'),
	    utils :path.resolve(__dirname, 'src/utils'),
	  },
	  modules: ['node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				exclude: /node_modules/,
				// include: path.join(__dirname, './src')  // 指定匹配文件的范围,需要绝对路径
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
      				"css-loader"
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
      				"css-loader",
      				"sass-loader",
				]
			},
			{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,//低于1000字节的转base64
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            }
			
		]
	},
	// optimization: {
	//     runtimeChunk:true,//方式一
	// }
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
}