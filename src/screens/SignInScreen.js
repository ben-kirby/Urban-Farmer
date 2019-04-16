import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { navigationOptions } from 'react-navigation';
import firebase, { db, auth } from "../config";

export default class SignInScreen extends Component {

  state = {
    email: '',
    password: '',
    loggedIn: false
  };

onSubmit = () => {
  auth.signInWithEmailAndPassword(this.state.email, this.state.password);
  //Add logic below on what to do if login is successful (go to main app stack) or if fail (stay on this page)
  //type logic here
  //if (response.user) {navigate('Profile', {name: 'userNameWhoLoggedOnHere'})}
}

static navigationOptions =
{
  title: 'SignInScreen',
};

  render() {
    return (
      <View style={styles.container}>
      <Text>URBAN FARMER</Text>
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
        onPress={this.onSubmit}
        title="Submit"
        color="#841584"
      />
    <Text>Not an existing user?</Text>
      <Button
        onPress={() => this.props.navigation.navigate('CreateUser')}
        title="Sign Up"
        color="#841584"
      />
      <Button
        onPress={() => this.props.navigation.navigate('AppStack')}
        title="*Shortcut to Main App"
        color="#841584"
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    margin: 5,
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  }
});
