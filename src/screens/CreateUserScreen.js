import React, { Component } from 'react';
import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Text,
	Alert
} from 'react-native';
import { auth } from '../config';
import AsyncStorage from '@react-native-community/async-storage';

export default class CreateUser extends Component {
	state = {
		email: '',
		password: '',
		uuid: null,
		errorMsg: null
	};

	handleSubmit = () => {
		auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(response => {
			if (response.user) {
				this.storeData('uid', response.user.uid)
			} else {
					Alert.alert('Oops! There was a problem with that. Try again plz.');
				}
			}
		)
	}

	storeData = async (key:String, value:String) => {
		try {
			await AsyncStorage.setItem(key, value)
		} catch (e) {
			Alert.alert(e)
		}
	}



	render() {
		return(
			<View style={styles.container}>
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
				<Button
					onPress={this.handleSubmit}
					title="Submit"
					color="#841584"
				/>
				<Text>{this.state.uuid}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		width: 250,
		margin: 5
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	}
});