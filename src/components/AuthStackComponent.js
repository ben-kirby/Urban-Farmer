import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, navigationOptions } from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import CreateUserScreen from '../screens/CreateUserScreen';

const RouterConfig =
  {
    SignIn:
      {
        screen: SignInScreen,
      },
    CreateUser:
      {
        screen: CreateUserScreen,
      },
  }

const NavOptionsConfig =
  {
    initialRouteName: 'SignIn',
    backBehavior: 'order',
  }

export default AuthStack = createSwitchNavigator(RouterConfig, NavOptionsConfig);
