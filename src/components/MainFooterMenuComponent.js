import React, {Component} from 'react';
import { navigationOptions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddItemScreen from '../screens/AddItemScreen';
import InventoryListScreen from '../screens/InventoryListScreen';
import SalesDetailScreen from '../screens/SalesDetailScreen';

const RouterConfig =
	{
		Home:
			{
				screen: HomeScreen,
				navigationOptions:
				{
					title: 'Home',
				}
			},
		InventoryList:
			{
				screen: InventoryListScreen,
				navigationOptions: {
					title: 'View Inventory',
				}
			},
		AddItem:
			{
				screen: AddItemScreen,
				navigationOptions: {
					title: 'Add Inventory',
				}
			},
		SalesDetail:
			{
				screen: SalesDetailScreen,
				navigationOptions: {
					title: 'Sales Details',
				}
			},
	}

//Note:  For style options, see: https://reactnavigation.org/docs/en/material-bottom-tab-navigator.html#materialbottomtabnavigatorconfig
const NavOptionsConfig =
	{
		shifting: false,
		labeled: true,
		initialRouteName: 'Home',
		activeColor: '#ff0000',
		inactiveColor: '#999999',
		backBehavior: 'order',
		barStyle:
			{
				borderColor: '#0099FF',
				borderWidth: 2,
				borderStyle: 'solid',
			}
	}

export default MainFooterMenuComponent = createMaterialBottomTabNavigator(RouterConfig, NavOptionsConfig);
