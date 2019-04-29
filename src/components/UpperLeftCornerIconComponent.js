import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

class UpperLeftCornerIcon extends Component {
    render() {
      return(
        <TouchableOpacity onPress={ ()=> {'text'} }>
          <Text>Test</Text>
        </TouchableOpacity>
      );
    }
  };

  export default withNavigation(UpperLeftCornerIcon);