/**
 * "Userlist.js"
 *
 * Displays the users from the database in a more
 * visually appealing way; used to test connections
 * between the Django back-end and React native
 * front-end.
 *
 * @author Allan DeBoe
 * @date February 18th, 2023
 */

import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import axios from 'axios';

import styles from '../styles';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Component Class

export default class UserList extends React.Component {
	
	constructor(props) {
		super(props);
		
		// use axios to communicate with Django
		// back-end to get data
		this.state = {
			data: [],
		};
		axios.get('http://127.0.0.1:8000/users/')
			.then((response) => {
				this.setState({ data: response.data });
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		if (this.state.data.length > 0) {
			return (
				<View>
					{
						this.state.data.map((item) => (
							<TouchableOpacity onPress = {(item) => alert(item.username)}>
								<Text style={styles.text}>{item.username}</Text>
							</TouchableOpacity>
						))
					}
				</View>
			);
		}
		return (
			<View>
				<Text style={styles.text}>Sorry, there's nothing to see here</Text>
			</View>
		);
	}

}