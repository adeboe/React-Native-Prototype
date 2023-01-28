/**
 * "babel.config.js"
 *
 * Configuration for "babel"
 *
 * @author Allan DeBoe
 * @date January 27th, 2023
 */
 
module.exports = function(api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
	
		plugins: [
			'react-native-classname-to-style',
			['react-native-platform-specific-extensions', { extensions: ['css'] }],
		],
	};
};
