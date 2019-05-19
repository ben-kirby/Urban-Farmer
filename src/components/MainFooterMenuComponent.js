import React, {Component} from 'react';
import { navigationOptions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import InventoryListScreen from '../screens/InventoryListScreen';
import SalesDetailScreen from '../screens/SalesDetailScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

//Note:  See this link for icon library:  https://fontawesome.com/v4.7.0/icons/
const RouterConfig =
	{
		Home:
		{
			screen: HomeScreen,
			navigationOptions:
			{
				title: 'Home',
				tabBarIcon: () => <Icon name="home" size={20} color='black'/>,
			}
		},
		InventoryList:
		{
			screen: InventoryListScreen,
			navigationOptions: {
				title: 'View Inventory',
				tabBarIcon: () => <Icon name="list-ul" size={20} color='black'/>,
			}
		},
		AddItem:
		{
			screen: AddItemScreen,
			navigationOptions: {
				title: 'Add Inventory',
				tabBarIcon: () => <Icon name="plus" size={20} color='black'/>,
			}
		},
		SalesDetail:
		{
			screen: SalesDetailScreen,
			navigationOptions: {
				title: 'Sales Details',
				tabBarIcon: () => <Icon name="usd" size={20} color='black'/>,
			}
		},
	}

//Note:  For style options, see: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html#materialbottomtabnavigatorconfig
const NavOptionsConfig =
	{
		initialRouteName: 'Home',
		shifting: false,
		labeled: true,
		activeColor: '#007aaf',
		inactiveColor: 'black',
		backBehavior: 'order',
		barStyle:
		{
			backgroundColor: 'white',
		}
	}

const allConfig = RouterConfig

export default MainFooterMenuComponent = createMaterialBottomTabNavigator(RouterConfig, NavOptionsConfig);
