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

const NavOptionsConfig =
	{
		initialRouteName: 'Home',
		navigationOptions:
			{
				
			},
	}

export default MainFooterMenuComponent = createMaterialBottomTabNavigator(RouterConfig, NavOptionsConfig);
