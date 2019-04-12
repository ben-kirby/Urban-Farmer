import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import SignInScreen from './src/screens/SignInScreen';
import Inventory from './src/screens/List';

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    AddItem,
    SignInScreen,
    Inventory
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer/>;
  }
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: 'bisque'
  },
  formField: {

  }
});