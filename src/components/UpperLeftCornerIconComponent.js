import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

class UpperLeftCornerIcon extends Component {
    render() {
      return(
        <TouchableOpacity onPress={ ()=> {'text'} }>
          <Icon name="leaf" size={30} style={{padding: 10}}/>
        </TouchableOpacity>
      );
    }
  };

  export default withNavigation(UpperLeftCornerIcon);