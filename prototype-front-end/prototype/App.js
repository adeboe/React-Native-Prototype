/**
 * "App.js"
 *
 * Entry point for the React Native application
 *
 * @author Allan DeBoe
 * @date February 16th, 2023
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Userlist from './components/Userlist';

// The React native app uses CSS modules to stylize
// components to make it easier to integrate 
//
// NOTE: Stylizing does not work at the moment, especially for
// web, so keep that in mind. Feel free to utilize standard methods
// of stylizing components, ideally having a "styles.js" file that
// contains just the styling.
import style from './App.module.css';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let styles = {};
switch (style.constructor.name) {
	
	case 'CSS2Properties':
		Object.values(style).forEach((property) => {
			styles[property] = style[property];
		});
		break;
	
	case 'CSSStyleDeclaration':
		styles = style;
		break;
	
	default:
		console.error(`oopsee!: ${JSON.stringify(style)}`);
		Object.values(style).forEach((property) => {
			styles[property] = style[property];
		});
		break;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>SER402 React Native Prototype</Text>
			<Userlist/>
		</View>
	);
}