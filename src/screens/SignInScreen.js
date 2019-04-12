import React, { Component } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

import firebase, { db, auth } from "../config";

export default class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
    loggedIn: false
  };

onSubmit = () => {
  auth.signInWithEmailAndPassword(this.state.email, this.state.password);
}


  render() {
    return (
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
        onPress={this.onSubmit}
        title="Submit"
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
    alignItems: 'center' 
  }
});