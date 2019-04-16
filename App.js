import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer, navigationOptions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import InventoryListScreen from './src/screens/InventoryListScreen';
import SalesMainScreen from './src/screens/SalesMainScreen';
import SignInScreen from './src/screens/SignInScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';

 //consider splitting this into another file
const AuthStack = createSwitchNavigator(
  {
    SignIn: { screen: SignInScreen },
    CreateUser: { screen: CreateUserScreen },
  },
  {
    initialRouteName: 'SignIn',
  }
);

 //consider splitting this into another file
export const MainFooterMenu = createMaterialBottomTabNavigator(
	{
		Home: { screen: HomeScreen },
		AddItem: { screen: AddItemScreen },
		InventoryList: { screen: InventoryListScreen },
    SalesMain: { screen: SalesMainScreen },
	},
	{
    initialRouteName: 'Home',
	}
);

const AppStack = createStackNavigator(
	{
		Main: {
      screen: MainFooterMenu,
      navigationOptions: {
        title: 'Urban Farmer',
        headerRight: (
          <Button title='LogOut' onPress={() => alert('Put LogOut Here!')}/>
        ),
      },
    },
	},
	{

    initialRouteName: 'Main',
	}
);

 //This should stay here
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
