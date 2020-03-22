const path = require("path");
const HtmlWebpachPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},

	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.css$|\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "img"
						}
					}
				]
			}
		]
	},

	plugins: [
		new HtmlWebpachPlugin({
			title: "My App",
			template: "./src/index.html",
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		}),
		new MiniCssExtractPlugin({
			filename: "style.css"
		}),
		// new CopyWebpackPlugin([
		// 	{
		// 		from: "./src/img/",
		// 		to: "img"
		// 	}
		// ])
	]
};
