import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

class SignOutButton extends Component {
  render() {
    return(
      <TouchableOpacity onPress={ ()=> { this.props.navigation.navigate('AuthStack'); }  }>
        <Icon name="sign-out" size={30} style={{padding: 10}}/>
      </TouchableOpacity>
    );
  }
};

export default withNavigation(SignOutButton);
