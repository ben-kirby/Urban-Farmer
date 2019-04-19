import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import MainFooterMenuComponent from './MainFooterMenuComponent';

class UpperLeftCornerIcon extends Component {
  render() {
    return(
      <TouchableOpacity onPress={ ()=> {return('Type Some Code here')} }>
        <Icon name="leaf" size={30} style={{padding: 10}}/>
      </TouchableOpacity>
    );
  }
};

class UpperRightCornerIcon extends Component {
  render() {
    return(
      <TouchableOpacity onPress={ ()=> {return('Type Some Code here')} }>
        <Icon name="sign-out" size={30} style={{padding: 10}}/>
      </TouchableOpacity>
    );
  }
};

const RouterConfig =
  {
    Main:
    {
      screen: MainFooterMenuComponent,
      navigationOptions:
      {
        title: 'Urban Farmer',
        headerStyle:
        {
          backgroundColor: '#009900', //header background color
        },
        headerTitleStyle:
        {
          color: '#FFFFFF', //header text color
          fontFamily: 'serif',
          fontWeight: 'bold',
        },
        headerLeft: (<UpperLeftCornerIcon/>),
        headerRight: (<UpperRightCornerIcon/>),
      },
    },
  }

//Note:  For style options see:  https://reactnavigation.org/docs/en/stack-navigator.html
const NavOptionsConfig =
  {
    initialRouteName: 'Main',
  }

export default AppStack = createStackNavigator(RouterConfig, NavOptionsConfig);
