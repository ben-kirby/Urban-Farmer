import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

class SignOutButton extends Component {

  signUserOut = async () => {
    try {
      await AsyncStorage.removeItem('uid').then(() => { 
        AsyncStorage.removeItem('email')
        }).then(() => { 
          this.props.navigation.navigate('AuthStack');
        });
    } catch (error) {
      alert(error.message)
      }
  }

  render() {
    return(
      <TouchableOpacity onPress={ () => { this.signUserOut(); }  }>
        <Icon name="sign-out" size={30} style={{padding: 10}}/>
      </TouchableOpacity>
    );
  }
};

export default withNavigation(SignOutButton);
