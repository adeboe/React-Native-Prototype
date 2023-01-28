/**
 * "App.js"
 *
 * Entry point for the React Native application
 *
 * @author Allan DeBoe
 * @date January 27th, 2023
 */

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// The React native app uses CSS modules to stylize
// components to make it easier to integrate 
import styles from './main.module.css'

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}