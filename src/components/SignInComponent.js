import React, { Component } from "react";
import { TextInput, View, Button, Alert, Text, TouchableOpacity } from "react-native";
import { auth } from "../config.js";
import AsyncStorage from '@react-native-community/async-storage';
import { navigationOptions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/stylesComponent';
import OfflineNotice from './OfflineNotice';

export default class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmail = (text) => {
    this.setState({ email: text })
  };

  handlePassword = (text) => {
    this.setState({ password: text })
  };

  handleSubmit = () => {
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(response => {
      if (response.user) {
        this.storeData('uid', response.user.uid).then(() => {
          this.storeData('email', this.state.email);
          this.props.navigation.navigate('AppStack');
        })
      } else {
        alert('Oops! There was a problem with that. Try again plz.');
      }
    }).catch( firebaseErrorCode  => {
      var errorCode = firebaseErrorCode.code;
      var errorMessage = firebaseErrorCode.message;
      switch(firebaseErrorCode.code) {
        case 'auth/invalid-email':
          alert('E-mail is badly formatted.');
          break;
        case 'auth/user-disabled':
          alert('User access is denied.');
          break;
        case 'auth/user-not-found':
          alert('User not found.');
          break;
        case 'auth/wrong-password':
          alert('Wrong password.');
          break;
        default:
          alert(errorCode,':',errorMessage);
      };
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
    if (
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

    return (
      <View style={styles.inputContainer}>
        <OfflineNotice/>
        <TextInput
          underlineColorAndroid = 'transparent'
          style={styles.input}
          onChangeText={this.handleEmail}
          placeholder='E-mail'
          autoCapitalize='none'
          value={this.state.text}
          keyboardType='email-address'
          maxLength={255}
          textContentType='username'
          />
        <TextInput
          underlineColorAndroid = 'transparent'
          style={styles.input}
          onChangeText={this.handlePassword}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize='none'
          value={this.state.text}
          keyboardType='default'
          maxLength={128}
          contextMenuHidden={true}
          textContentType='password'
          />
        <Button
          onPress={this.handleSubmit}
          title="Sign In"
          disabled={this.isEnabled()}
          />
      </View>
    );
  }
}
