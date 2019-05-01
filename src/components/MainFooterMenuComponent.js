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
				tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor}/>,
			}
		},
		InventoryList:
		{
			screen: InventoryListScreen,
			navigationOptions: {
				title: 'View Inventory',
				tabBarIcon: ({tintColor}) => <Icon name="list-ul" size={20} color={tintColor}/>,
			}
		},
		AddItem:
		{
			screen: AddItemScreen,
			navigationOptions: {
				title: 'Add Inventory',
				tabBarIcon: ({tintColor}) => <Icon name="plus" size={20} color={tintColor}/>,
			}
		},
		SalesDetail:
		{
			screen: SalesDetailScreen,
			navigationOptions: {
				title: 'Sales Details',
				tabBarIcon: ({tintColor}) => <Icon name="usd" size={20} color={tintColor}/>,
			}
		},
	}

//Note:  For style options, see: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html#materialbottomtabnavigatorconfig
const NavOptionsConfig =
	{
		initialRouteName: 'Home',
		shifting: false,
		labeled: true,
		activeColor: 'white',
		inactiveColor: '#005500',
		backBehavior: 'order',
		barStyle:
		{
			backgroundColor: '#009900',
		}
	}

const allConfig = RouterConfig

export default MainFooterMenuComponent = createMaterialBottomTabNavigator(RouterConfig, NavOptionsConfig);
