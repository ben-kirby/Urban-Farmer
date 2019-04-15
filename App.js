import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import InventoryListScreen from './src/screens/InventoryListScreen';
import SignInScreen from './src/screens/SignInScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';

const AuthStack = createStackNavigator(
  {
    SignIn: { screen: SignInScreen },
    CreateUser: { screen: CreateUserScreen },
  },
  {
    initialRouteName: 'SignIn',
  }
);

const AppStack = createBottomTabNavigator(
	{
		Home: { screen: HomeScreen },
		AddItem: { screen: AddItemScreen },
		InventoryList: { screen: InventoryListScreen },
	},
	{
		initialRouteName: 'Home',
	}
);

const AppContainer = createAppContainer(createSwitchNavigator(
    {
      AppStack,
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    }
  )
);

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
