import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';

import MainFooterMenuComponent from './MainFooterMenuComponent';

const RouterConfig =
  {
    Main:
      {
        screen: MainFooterMenuComponent,
        navigationOptions:
          {
            title: 'Urban Farmer',
            headerLeft: (<Button title='Icon'/>),
            headerRight: (<Button title='LogOut' onPress={() => alert('Put LogOut Here!')}/>),
          },
      },
  }

const NavOptionsConfig =
	{
		initialRouteName: 'Main',
		//navigationOptions: {},
	}

export default AppStack = createStackNavigator(RouterConfig, NavOptionsConfig);
