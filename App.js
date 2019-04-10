import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import List from './src/screens/List';

const AppNavigator = createStackNavigator(
  {
    Home,
    AddItem,
    List
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

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