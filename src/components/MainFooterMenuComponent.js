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
					tabBarIcon: (<Icon name="home" size={30}/>),
				}
			},
		InventoryList:
			{
				screen: InventoryListScreen,
				navigationOptions: {
					title: 'View Inventory',
					tabBarIcon: (<Icon name="list-ul" size={30}/>),
				}
			},
		AddItem:
			{
				screen: AddItemScreen,
				navigationOptions: {
					title: 'Add Inventory',
					tabBarIcon: (<Icon name="plus" size={30}/>),
				}
			},
		SalesDetail:
			{
				screen: SalesDetailScreen,
				navigationOptions: {
					title: 'Sales Details',
					tabBarIcon: (<Icon name="usd" size={30}/>),
				}
			},
	}

//Note:  For style options, see: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html#materialbottomtabnavigatorconfig
const NavOptionsConfig =
	{
		shifting: false,
		labeled: true,
		initialRouteName: 'Home',
		activeColor: '#FFFFFF',
		inactiveColor: '#999999',
		backBehavior: 'order',
		barStyle:
			{
				backgroundColor: '#009900',
				borderColor: '#00FF55',
				borderWidth: 2,
				borderStyle: 'solid',
			}
	}

export default MainFooterMenuComponent = createMaterialBottomTabNavigator(RouterConfig, NavOptionsConfig);
