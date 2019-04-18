import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';

import MainFooterMenuComponent from './MainFooterMenuComponent';

// export const UpperLeftCornerIcon extends Component {
//   render (
//     return(
//
//     )
//   )
// }

const RouterConfig =
  {
    Main:
      {
        screen: MainFooterMenuComponent,
        navigationOptions:
          {
            title: 'Urban Farmer',
            headerStyle:
              {
                backgroundColor: '#009900', //header background color
                borderColor: '#00FF55', //header border color
                borderWidth: 2,
                borderStyle: 'solid',
              },
            headerTitleStyle:
              {
                color: '#FFFFFF', //header text color
                fontFamily: 'italic',
                fontWeight: 'bold',
              },
            headerLeft: (<Button title='Icon'/>),
            headerRight: (<Button title='LogOut' onPress={() => alert('Put LogOut Here!')}/>),
          },
        //defaultNavigationOptions: { //Note: This option configures the children screens }
      },
  }

//Note:  For style options see:  https://reactnavigation.org/docs/en/stack-navigator.html
const NavOptionsConfig =
	{
		initialRouteName: 'Main',
	}

export default AppStack = createStackNavigator(RouterConfig, NavOptionsConfig);
