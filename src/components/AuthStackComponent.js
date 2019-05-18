import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, navigationOptions } from 'react-navigation';

import SignInScreen from './SignInComponent';
import CreateUserScreen from './CreateUserComponent';
import UserAuthScreen from '../screens/UserAuthScreen';

const RouterConfig =
  {
  	UserAuth:
      {
      	screen: UserAuthScreen,
      }
  };

const NavOptionsConfig =
  {
  	initialRouteName: 'UserAuth',
  	backBehavior: 'order',
  };

export default AuthStack = createSwitchNavigator(RouterConfig, NavOptionsConfig);
