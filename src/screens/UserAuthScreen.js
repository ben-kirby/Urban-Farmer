import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/stylesComponent';

import LogoComponent from '../components/LogoComponent';
import SignIn from '../components/SignInComponent';
import CreateUser from '../components/CreateUserComponent';


export default class UserAuthScreen extends Component{
	state = {
		newUser: false
	}

	handleNewuserToggle = () => {
		this.setState({
			newUser: !this.state.newUser
		});
	}

	render(){
		let content;

		if (this.state.newUser == false) {
			content = 
				<View style={styles.containerAuthScreens}>
				<SignIn/>
				<Text>New User?</Text>
				<TouchableOpacity onPress={this.handleNewuserToggle}>
					<Text>Sign Up</Text>
				</TouchableOpacity>
			</View>
		} else {
			content = 
			<View style={styles.containerAuthScreens}>
				<CreateUser/>
				<Text>Existing User?</Text>
				<TouchableOpacity onPress={this.handleNewuserToggle}>
					<Text>Log In</Text>
				</TouchableOpacity>
			</View>
		}

		return(
			<View style={styles.container}>
				<LogoComponent/>
				{content}
			</View>
		);
	}
}