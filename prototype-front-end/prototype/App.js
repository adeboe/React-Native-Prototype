/**
 * "App.js"
 *
 * Entry point for the React Native application
 *
 * @author Allan DeBoe
 * @date February 7th, 2023
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// The React native app uses CSS modules to stylize
// components to make it easier to integrate 
import style from './App.module.css';

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

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Open up App.js to start working on your app!</Text>
		</View>
	);
}
