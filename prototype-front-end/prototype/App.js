/**
 * "App.js"
 *
 * This is the entry-point for the React Native prototype
 *
 * @author Allan DeBoe
 * @date January 20th, 2023
 */

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This CSS Module is the Stylesheet used for
// the prototype. It's there to make it easier
// to integrate CSS stuff into the React native
// app
import styles from './App.module.css';


export default function App() {
	
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
	
}

/*
const styles = StyleSheet.create({

	// CONTAINER STYLE
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
  
});
*/