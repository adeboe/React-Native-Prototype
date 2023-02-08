/**
 * "metro.config.js"
 *
 * Configuration for "metro"
 *
 * @author Allan DeBoe
 * @date February 7th, 2023
 */

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
	
	const {
		resolver: { sourceExts }
	} = await getDefaultConfig();
	
	return {
		transformer: {
			babelTransformerPath: require.resolve("react-native-css-transformer"),
		},
		resolver: {
			sourceExts: [...sourceExts, "css"],
		},
	};
	
})();
