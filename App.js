import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import InventoryList from './src/screens/InventoryList';
import SignInScreen from './src/screens/SignInScreen';

const AuthStack = createStackNavigator(
  {
    SignInScreen: {screen: SignInScreen},
  }
)

const AppStack = createMaterialBottomTabNavigator(
  {
    Home: {screen: Home},
    AddItem: {screen: AddItem},
    InventoryList: {screen: InventoryList},
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const AppContainer = createAppContainer(FooterNavigator);

export default class App extends Component {
  render() {
    return (<AppContainer/>);
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
