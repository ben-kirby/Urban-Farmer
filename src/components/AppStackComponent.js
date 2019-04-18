import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator, navigationOptions } from 'react-navigation';

import MainFooterMenuComponent from './MainFooterMenuComponent';

class UpperLeftCornerIcon extends Component {
  render() {
    return(
      <TouchableOpacity onPress={''}>
        <Text style={{ fontSize: 35 }}>🌿</Text>
      </TouchableOpacity>
    );
  }
};

class UpperRightCornerIcon extends Component {
  render() {
    return(
      <View>
        <Button title='LogOut' onPress={() => alert('Put LogOut Here!')}/>
      </View>
    );
  }
};

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
            headerLeft: (<UpperLeftCornerIcon/>),
            headerRight: (<UpperRightCornerIcon/>),
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
