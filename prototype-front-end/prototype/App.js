/**
 * "App.js"
 *
 * Serves as an entry point for the application.
 *
 * @author Allan DeBoe
 * @date February 17th, 2023
 */

import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// React Native Project Components

import UserList from './components/Userlist';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Displays the title for the project and the list 
// of users stored in the database.

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>SER402 React Native Prototype</Text>
			<UserList/>
		</View>
	);
}