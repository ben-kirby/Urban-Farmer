import React, { Component } from "react";
import { TextInput, View, Button, Alert, Text, TouchableOpacity } from "react-native";
import { auth } from "../config";
import AsyncStorage from '@react-native-community/async-storage';
import { navigationOptions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/stylesComponent';
import OfflineNotice from '../components/OfflineNotice';

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
      <View style={styles.container}>
        <OfflineNotice/>
        <Text style={{fontWeight: 'bold', fontSize: 24}}>URBAN FARMER</Text>
        <Text>Login</Text>
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
          title="Sign In"
          disabled={this.isEnabled()}
          color="#4a822f"
          />
        <Text>{'\nNot an existing user?\n'}</Text>
        <Button
          onPress={() => this.props.navigation.navigate('CreateUser')}
          title="Sign Up"
          color="#4a822f"
          />
        <Text>{'\n\n\n'}</Text>
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('AppStack') }>
          <Icon name="leaf" size={30} style={{padding: 10}}/>
        </TouchableOpacity>
      </View>
    );
  }
}
