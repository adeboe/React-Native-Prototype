/**
 * "UserlistComponent.js"
 *
 * Contains the "Userlist" component, which
 * displays users stored in the database
 *
 * @author Allan DeBoe
 * @date February 10th, 2023
 */
 
import React from 'react';
import { ListView, Text } from 'react-native';
import axios from 'axios';

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
// Axios will not work on mobile due to the fact it will require a
// publicly available REST API domain to work.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Contains Userlist Component

export default class UserList extends React.Component {
	
	constructor(props) {
		
		super(props);

		// Get Users
		users = [];
		
		const dSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		
		// Expecting a List/Array of users
		//
		// For this prototype, each user in this array has three parts
		// > username
		// > account_creation_date
		// > profile_description
		axios.get("http://localhost:8000/users/")
			.then(function (response) {
				if (response.json().status == "200") {
					users = response.json();
				}
			})
			.catch(function (error) {
				// Ignore Error (for now)
			})
			.finally(function() {
			
				// Get the list of usernames
				usernames = []
				if (users.length > 0) {
					for (let index in users) {
						usernames.push({username: users[index].username});
					}
				}
		
				this.state = {
					dataSource: dSource.cloneWithRows(usernames)
				}
			});
	}
	
	render() {
		return (
			<ListView
				dataSource = {this.state.dataSource}
				renderRow = {
					(rowData) => <Text style={styles.text}>{rowData}</Text>
				}
			/>
		);
	}
	
}