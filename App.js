import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import InventoryListScreen from './src/screens/InventoryListScreen';
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
const AppStack = createMaterialBottomTabNavigator(
	{
		Home: { screen: HomeScreen },
		AddItem: { screen: AddItemScreen },
		InventoryList: { screen: InventoryListScreen },
	},
	{
		initialRouteName: 'Home',
	}
);

 //This should stay here
const AppContainerAuth = createAppContainer(createSwitchNavigator(
	{
		AppStack,
		AuthStack,
	},
	{
		initialRouteName: 'AuthStack',
	})
);

const AppContainerSkipAuth = createAppContainer(createSwitchNavigator(
	{
		AppStack,
		AuthStack,	
	},
	{
		initialRouteName: 'AppStack',
	})
);


export default class App extends Component {
	state = {
		renderApp: false,
		loadingLocalData: true,
		localDataFound: false
	}

	componentDidMount() {
		if (this.state.loadingLocalData === true) {
			
		}

	}

	showApp = () => {
		this.setState({
			renderApp: true
		})
	}

	render() {
		if (this.state.loadingLocalData === true) {
				return (
					<View style={styles.page}>
						<Text>Loading...</Text>
					</View>
				);	
		} else {
			if (this.state.localDataFound === true) {
				< AppContainerSkipAuth/>
			} else {
				< AppContainerAuth/>
			}
			return (
				<View style={styles.page}>
					<Button
						title="Render App"
						onPress={this.showApp}
					/>
				</View>
			)
		}
	}
}

const styles = StyleSheet.create({
	page: {
		padding: 25,
		paddingTop: 75,
		backgroundColor: 'bisque'
	}
});
