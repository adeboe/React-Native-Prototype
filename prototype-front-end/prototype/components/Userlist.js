/**
 * "Userlist.js"
 *
 * Displays the users from the database in a more
 * visually appealing way; used to test connections
 * between the Django back-end and React native
 * front-end.
 *
 * @author Allan DeBoe
 * @date February 17th, 2023
 */

import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import axios from 'axios';

import styles from '../styles';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Component Class

export default class UserList extends React.Component {
	
	constructor(props) {
		super(props);
		
		// use axios to communicate with Django
		// back-end to get data
		
		users = [];
		errorJson = {};
		state = {};
		axios.get('http://127.0.0.1:8000/users')
			.then(function(response) {
				users = response.data;
			})
			.catch(function(error) {
				errorJson = error;
			})
			.finally(function() {
				state = {
					data: users,
					error: errorJson,
				}
			});
			
	}
	
	displayList() {
		return (
			<View>
				{
					this.state.data.map((item) => (
						<TouchableOpacity onPress = {() => alert(item.username)}>
							<Text style={styles.text}>{item.username}</Text>
						</TouchableOpacity>
					))
				}
			</View>
		);
	}

	displayError() {
		return (
			<View>
				<Text style={styles.text}>{this.state.error}</Text>
			</View>
		)
	}

	render() {
		if (this.state.error != {}) {
			return this.displayError();
		}
		return this.displayList();
	}
	
}