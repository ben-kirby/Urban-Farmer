import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import Home from './src/screens/Home';
import AddItem from './src/screens/AddItem';
import InventoryList from './src/screens/InventoryList';
import SignInScreen from './src/screens/SignInScreen';
<<<<<<< HEAD
import AuthLoadingScreen from './src/screens/AuthLoadingScreen';

const AuthStack = createStackNavigator(
  {
    SignInScreen,
  }
);

const AppStack = createMaterialBottomTabNavigator(
  {
    Home,
    AddItem,
    InventoryList,
  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
=======
import CreateUserScreen from './src/screens/CreateUserScreen';

const TabNavigator = createBottomTabNavigator(
	{
		Home,
		AddItem,
		InventoryList,
		SignInScreen,
		CreateUserScreen
	},
	{
		initialRouteName: 'Home'
	}
>>>>>>> df4cace78cd3b0440b403c98ea51fdf76b38901b
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
<<<<<<< HEAD
  render() {
    return (<AppContainer/>);
  }
=======
	render() {
		return <AppContainer/>;
	}
>>>>>>> df4cace78cd3b0440b403c98ea51fdf76b38901b
}

const styles = StyleSheet.create({
	page: {
		padding: 25,
		paddingTop: 75,
		backgroundColor: 'bisque'
	},
	formField: {

<<<<<<< HEAD
  }
});
=======
	}
});
>>>>>>> df4cace78cd3b0440b403c98ea51fdf76b38901b
