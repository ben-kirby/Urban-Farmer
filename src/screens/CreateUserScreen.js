import React, { Component } from 'react';
import { View, TextInput,	Button, Text,	Alert } from 'react-native';
import { auth } from '../config';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/stylesComponent';

export default class CreateUserScreen extends Component {
	state = {
		email: '',
		password: ''
	};

	handleEmail = (text) => {
    this.setState({ email: text })
  };

	handlePassword = (text) => {
		this.setState({ password: text })
	};

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

	isEnabled = () => {
    if (((this.state.email === '') || (this.state.password === '')) || (this.isGoodEmail(this.state.email) === false) ) {
      return true;
    } else {
      return false;
    };
  }

  isGoodEmail = (email) => {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReg.test(email);
  }

	render() {
		return(
			<View style={styles.container}>
				<Text style={{fontWeight: 'bold', fontSize: 24}}>URBAN FARMER</Text>
				<Text>Sign Up</Text>
				<TextInput
          underlineColorAndroid = 'transparent'
          style={styles.input}
          onChangeText={this.handleEmail}
          placeholder='E-mail'
          autoCapitalize='none'
          value={this.state.text}
          textContextType='emailAddress'
          keyboardType='email-address'
          maxLength={255}
          />
        <TextInput
          underlineColorAndroid = 'transparent'
          style={styles.input}
          onChangeText={this.handlePassword}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize='none'
          value={this.state.text}
          textContextType='password'
          keyboardType='default'
          maxLength={128}
          />
        <Button
          onPress={this.handleSubmit}
          title="Sign Up"
          disabled={this.isEnabled()}
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
