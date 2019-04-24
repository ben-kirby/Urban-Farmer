//Note:  This screen is the login/sign-in loading screen for the switch navigator for the authorization flow.  It is a placeholder and not being used right now.  See the following hyper links for examples:
//https://reactnavigation.org/docs/en/stack-navigator.html
//https://reactnavigation.org/docs/en/switch-navigator.html
//https://snack.expo.io/@react-navigation/auth-flow-v3
import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View, } from 'react-native';
import { navigationOptions } from 'react-navigation';

import styles from '../styles/stylesComponent';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'AppStack' : 'AuthStack');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <Text>Auth Loading Screen</Text>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
