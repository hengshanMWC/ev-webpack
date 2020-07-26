const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
	r
} = require('./utils')
module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		index: './src/index.js'
	},
	output: {
		path: r('ev'),
		filename: 'main.js',
		// filename: '[name].js',
		// chunkFilename: '[name].[chunkhash].bundle.js',
		publicPath: './'
	},
	resolve: {
	  // extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css'],
		alias: {
			'@' : r('src'),
			'~': r('src/utils')
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
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
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
	optimization: {
		runtimeChunk:true,//方式一
	}
}