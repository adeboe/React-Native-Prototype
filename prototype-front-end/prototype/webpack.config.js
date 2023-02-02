/**
 * "webpack.config.js"
 *
 * Configuration for "webpack"
 *
 * Based on the following resource:
 * https://github.com/kristerkari/react-native-css-modules/blob/master/docs/web-compatibility.md
 *
 * @author Allan DeBoe
 * @date February 1st, 2023
 */
const webpack = require("webpack");
const path = require("path");

module.exports = {
	mode: "development",
    entry: ["react-hot-loader/patch", "./index.web.js"],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
	optimization: {
		moduleIds: 'named'
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
            "react-native": "react-native-web",
        },
        extensions: [".web.js", ".js", ".web.jsx", ".jsx"],
        mainFields: ["browser", "main"],
    },
	devServer: {
		historyApiFallback: {
			index: './index.html'
		}
	}
};