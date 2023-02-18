/**
 * "styles.js"
 *
 * used to stylize the site
 *
 * @author Allan DeBoe
 * @date February 17th, 2023
 */

import { StyleSheet } from 'react-native';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Ideally CSS Modules should be used but it was 
// giving me problems so, for now, typical React native
// stylization will be used instead

const styles = StyleSheet.create({

    container: {
		flex: 1,
		backgroundColor: '#162028',
		alignItems: 'center',
		justifyContent: 'center',
	},

	header: {
		color: 'white',
		fontSize: 24,
	},

    text: {
		color: 'white',
		fontSize: 12,
	},

});

export default styles;