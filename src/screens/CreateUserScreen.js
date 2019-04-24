import React, { Component } from 'react';
import { View, TextInput,	Button, Text,	Alert } from 'react-native';
import { auth } from '../config';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/stylesComponent';

export default class CreateUserScreen extends Component {
	state = {
		email: '',
		password: '',
		confirmPass: '',
		dontMatch: false
	};


	handleChangePassConfirm = (text) => {
	this.setState({confirmPass: text});
	const { password } = this.state;
	if(password !== text ){
		this.setState({dontMatch: true});
	} else 
	this.setState({dontMatch: false});
	}


	handleSubmit = () => {
			auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(response => {
				if (response.user) {
					this.storeData('uid', response.user.uid).then(() => {
						this.props.navigation.navigate('AppStack');
					})
				} else {
					alert('Oops! There was a problem with that. Try again plz.');
				}
			});
	}

	storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value)
		} catch (e) {
			Alert.alert(e.message)
		}
	}



	render() {
		let dontMatchError;
		this.state.dontMatch ? (dontMatchError = <Text>Passwords don't match</Text>) : null;
		return(
			<View style={styles.container}>
				<Text style={{fontWeight: 'bold', fontSize: 24}}>URBAN FARMER</Text>
				<Text>Sign Up</Text>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({email: text})}
					placeholder="E-Mail"
				/>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({password:text})}
					secureTextEntry={true}
					placeholder="Password"
				/>
				<TextInput
					style={styles.input}
					onChangeText={this.handleChangePassConfirm}
					secureTextEntry={true}
					placeholder="Confirm Password"
				/>
				{dontMatchError}
				<Button
					onPress={this.handleSubmit}
					title="Submit"
					color="#4a822f"
				/>
			<Text>{'\nOops, I\'m already an returning user...\n'}</Text>
				<Button
					onPress={() => this.props.navigation.navigate('SignIn')}
					title="Return to Login"
					color="#4a822f"
				/>
			</View>
		);
	}
}
