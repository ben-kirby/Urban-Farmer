import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import AppStack from './src/components/AppStackComponent';
import AuthStack from './src/components/AuthStackComponent';
import Loading from './src/components/Loading';

//This section of code ignores the yellow warning box
import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
//End code that ignores yellow warning box

//This should stay here
const createRootNavigator = (islocalDataFound = false) => {
  return createSwitchNavigator(
    {
      AppStack,
      AuthStack,
    },
    {
      initialRouteName: isLocalDataFound ? 'AppStack' : 'AuthStack',
    }
  );
};

const AppContainerAuth = createAppContainer(createRootNavigator(isLocalDataFound));

// const AppContainerSkipAuth = createAppContainer(createSwitchNavigator(
//   {
//     AppStack,
//     AuthStack,
//   },
//   {
//     initialRouteName: 'AppStack',
//     headerMode: 'none',
//   })
// );

export default class App extends Component {
  state = {
    uid: null,
    loadingLocalData: true,
    localDataFound: false
  }


  componentDidMount() {
    if (this.state.loadingLocalData === true) {
      this.readUserData();
    }
  }

  readUserData = async () => {
    try {
      await AsyncStorage.getItem('uid').then(response => {
        if (response !== null) {
          this.setState({
            loadingLocalData: false,
            localDataFound: true
          });
        } else {
          this.setState({
            loadingLocalData: false,
            localDataFound: false
          });
        }

      });
    } catch (e) {
      Alert.alert('Catch', e.message)
    }
  }

  render() {
    if (this.state.loadingLocalData === true) {
      return (
        <View style={styles.page}>
          <Loading/>
        </View>
      );
    } else {
      return <AppContainerAuth/>
    }
  }
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    paddingTop: 75,
  }
});
