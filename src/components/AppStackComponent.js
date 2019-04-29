import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';
import UpperLeftCornerIcon from './UpperLeftCornerIconComponent';
import SignOutButton from './SignOutButtonComponent';
import MainFooterMenuComponent from './MainFooterMenuComponent';

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
          // fontFamily: 'serif', //Does not work on iOS
          fontWeight: 'bold',
        },
        headerLeft: (props) => (<UpperLeftCornerIcon/>),
        headerRight: (<SignOutButton/>),
      },
    },
  }

//Note:  For style options see:  https://reactnavigation.org/docs/en/stack-navigator.html
const NavOptionsConfig =
  {
    initialRouteName: 'Main',
  }
export default AppStack = createStackNavigator(RouterConfig, NavOptionsConfig);
