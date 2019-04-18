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

export default class CreateUserScreen extends Component {
	state = {
		email: '',
		password: ''
	};

	handleSubmit = () => {
		auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(response => {
			if (response.user) {
				this.storeData('uid', response.user.uid).then(() => {
					this.props.navigation.navigate('AppStack');
				})
			} else {
				Alert.alert('Oops! There was a problem with that. Try again plz.');
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
		return(
			<View style={styles.container}>
				<Text>URBAN FARMER</Text>
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
				<Button
					onPress={this.handleSubmit}
					title="Submit"
					color="#841584"
				/>
				<Button
					onPress={() => this.props.navigation.navigate('SignIn')}
					title="Return to Login"
					color="#841584"
				/>
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
		alignItems: 'center',
		flex: 1,
	}
});
