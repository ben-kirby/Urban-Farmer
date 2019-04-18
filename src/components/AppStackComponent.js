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
            // headerLeft: (return(<TouchableOpacity onPress={() => alert('Put LogOut Here!')}/><Text>'Insert Image here!'</Text></TouchableOpacity>));
            // headerRight: (return(<TouchableOpacity onPress={() => alert('Put LogOut Here!')}/><Text>'Icon here!'</Text></TouchableOpacity>));
          },
        //defaultNavigationOptions: { //Note: This option configures the children screens }
      },
  }

//Note:  For style options see:  https://reactnavigation.org/docs/en/stack-navigator.html
const NavOptionsConfig =
	{
		initialRouteName: 'Main',
	}

export default AppStack = createStackNavigator(RouterConfig, NavOptionsConfig);
