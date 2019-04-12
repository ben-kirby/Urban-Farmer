import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from "react-native";

import firebase, { db, provider, auth } from "../config";

export default class SignIn extends Component {
  state = {
    user: null
  };

  handleLogin = () => {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Login</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#6565fc"
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center"
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});
