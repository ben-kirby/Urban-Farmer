import React, { Component } from 'react';
import { View, TextInput,	Button, Text,	Alert } from 'react-native';
import { auth, db } from '../config.js';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/stylesComponent';

export default class CreateUserScreen extends Component {
	state = {
		email: '',
		password: '',
		confirmPass: '',
		dontMatch: false
	};

	handleEmail = (text) => {
    this.setState({ email: text })
  };

	handlePassword = (text) => {
		this.setState({ password: text })
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
						this.successfulAuth();
					})
				} else {
					alert('Oops! There was a problem with that. Try again plz.');
				}
			}).catch( firebaseErrorCode  => {
	      var errorCode = firebaseErrorCode.code;
	      var errorMessage = firebaseErrorCode.message;
	      switch(firebaseErrorCode.code) {
	        case 'auth/email-already-in-use':
	          alert('User already exists.');
	          break;
					case 'auth/invalid-email':
						alert('E-mail is badly formatted.');
						break;
	        case 'auth/operation-not-allowed':
	          alert('Operation not allowed.');
	          break;
	        case 'auth/weak-password':
	          alert('Password is weak.');
	          break;
	        default:
	          alert(errorCode,':',errorMessage);
	      };
	    });
	}

	successfulAuth = () => {
		this.props.success();
	}

	storeData = async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value)
		} catch (e) {
			Alert.alert(e.message)
		}
	}

	isEnabled = () => {
    if (
			this.state.confirmPass != this.state.password ||
			!this.isGoodEmail(this.state.email) ||
			!this.isGoodPassword(this.state.password)
		) {
      return true;
    } else {
      return false;
    };
  }

	isGoodPassword = (password) => {
		var passwordReg = /^\w{6,}$/;
		return passwordReg.test(password);
	}

  isGoodEmail = (email) => {
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailReg.test(email);
  }

	render() {
		let dontMatchError;
		this.state.dontMatch ? (dontMatchError = <Text>Passwords don't match</Text>) : null;
		return(
			<View style={styles.inputContainer}>
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
					contextMenuHidden={true}
          />
				<TextInput
					underlineColorAndroid = 'transparent'
          style={styles.input}
					onChangeText={this.handleChangePassConfirm}
					secureTextEntry={true}
					placeholder="Confirm Password"
					autoCapitalize='none'
					textContextType='password'
					keyboardType='default'
					maxLength={128}
					contextMenuHidden={true}
					/>
				{dontMatchError}
				<Button
					onPress={this.handleSubmit}
					title="Sign Up"
					disabled={this.isEnabled()}
				/>
			</View>
		);
	}
}
