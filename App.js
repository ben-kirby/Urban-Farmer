import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import InventoryList from './src/screens/InventoryList';
import SignInScreen from './src/screens/SignInScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home,
    AddItem,
    InventoryList,
    SignInScreen
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