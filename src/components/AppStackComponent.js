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
          backgroundColor: '#ffffff', //header background color
        },
      	headerTitleStyle:
        {
        	color: '#000000', //header text color
        	// fontFamily: 'serif', //Does not work on iOS
        	fontWeight: 'bold',
        },
      	headerLeft: (<UpperLeftCornerIcon/>),
      	headerRight: (<SignOutButton/>),
      },
    },
  };

//Note:  For style options see:  https://reactnavigation.org/docs/en/stack-navigator.html
const NavOptionsConfig =
  {
  	initialRouteName: 'Main',
  };
let AppStack = createStackNavigator(RouterConfig, NavOptionsConfig);

export default AppStack;
