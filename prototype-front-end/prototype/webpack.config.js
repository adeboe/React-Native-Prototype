/**
 * "webpack.config.js"
 *
 * Configuration for "webpack"
 *
 * Based on the following resource:
 * https://github.com/kristerkari/react-native-css-modules/blob/master/docs/web-compatibility.md
 *
 * @author Allan DeBoe
 * @date February 7th, 2023
 */
const webpack = require("webpack");
const htmlWebpackPlugin = require('html-webpack-plugin'); // FINALLY!!!!
const path = require("path");

module.exports = {
	mode: "development",
    entry: ["react-hot-loader/patch", "./index.web.js"],
    plugins: [
		new htmlWebpackPlugin({ template: './index.html' }),
        new webpack.HotModuleReplacementPlugin(),
    ],
	optimization: {
		moduleIds: 'named'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "./index.web.js",
		publicPath: '/'
	},
	devServer: {
		historyApiFallback: {
			index: './index.html'
		}
	},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						babelrc: false,
						configFile: false,
						presets: [
							"@babel/preset-env",
							"react",
							"module:metro-react-native-babel-preset",
						],
						plugins: [
							"react-hot-loader/babel",
							['@babel/plugin-proposal-private-property-in-object', { loose: true }],
							['@babel/plugin-proposal-private-methods', { loose: true }],
						],
					},
				},
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
								localIdentName: "[path]___[name]__[local]___[hash:base64:5]",
							},
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
			"react": path.join(__dirname, "node_modules/react"),
            "react-native": path.join(__dirname, "node_modules/react-native-web"),
			"react-native-web": path.join(__dirname, "node_modules/react-native-web"),
        },
        extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
        mainFields: ["browser", "main"],
    }
};