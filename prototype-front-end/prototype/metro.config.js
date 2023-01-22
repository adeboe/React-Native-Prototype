/**
 * "metro.config.js"
 *
 * This file configures "Metro"
 *
 * @author Allan DeBoe
 * @date January 20th, 2023
 */

// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
	
	const {
		resolver: { sourceExts }
	} = await getDefaultConfig();
	
	return {
		
		transformer: {
			babelTransformerPath: require.resolve("react-native-css-transformer")
		},
		
		resolver: {
			sourceExts: [...sourceExts, "css"]
		}
		
	};
	
})();
