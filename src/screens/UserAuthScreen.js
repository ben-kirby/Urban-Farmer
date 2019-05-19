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

	handleUserAuthContentToggle = () => {
		this.setState({
			newUser: !this.state.newUser
		});
	}

	render(){
		let userAuthContent;

		if (this.state.newUser == false) {
			userAuthContent = 
				<View style={styles.authContent}>
					<SignIn/>
					<Text>New User?</Text>
					<TouchableOpacity onPress={this.handleUserAuthContentToggle}>
						<Text>Sign Up</Text>
					</TouchableOpacity>
				</View>
		} else {
			userAuthContent = 
				<View style={styles.authContent}>
					<CreateUser/>
					<Text>Existing User?</Text>
					<TouchableOpacity onPress={this.handleUserAuthContentToggle}>
						<Text>Log In</Text>
					</TouchableOpacity>
				</View>
		}

		return(
			<View style={styles.containerAuthScreens}>
				<Text style={styles.title}>Urban Farmer</Text>
				<LogoComponent/>
				{userAuthContent}
			</View>
		);
	}
}