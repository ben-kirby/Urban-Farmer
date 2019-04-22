import React, { Component } from "react";
import { TextInput, View, Button, Alert, Text, console } from "react-native";
import { auth } from "../config";
import AsyncStorage from '@react-native-community/async-storage';
import { navigationOptions } from 'react-navigation';

var styles = require('../styles/styleComponent')

export default class SignInScreen extends Component {
  state = {
    email: '',
    password: ''
  };


handleSubmit = () => {
  auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(response => {
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
    return (
      <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>URBAN FARMER</Text>
      <Text>Login</Text>
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
        title="Sign In"
        color="#4a822f"
      />
    <Text>{'\nNot an existing user?\n'}</Text>
      <Button
        onPress={() => this.props.navigation.navigate('CreateUser')}
        title="Sign Up"
        color="#4a822f"
      />
    <Text>{'\n'}</Text>
      <Button
        onPress={() => this.props.navigation.navigate('AppStack')}
        title="*Shortcut to Main App"
        color="#4a822f"
      />
    </View>
    );
  }
}
