import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, createAppContainer, navigationOptions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import AppStack from './src/components/AppStackComponent';
import AuthStack from './src/components/AuthStackComponent';

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
          Alert.alert('UID', JSON.stringify(response));
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
          <Text>Loading...</Text>
        </View>
      );
    } else {
      if (this.state.localDataFound === true) {
        return <AppContainerSkipAuth/>
      } else {
        return <AppContainerAuth/>
      }
    }
  }
}

const styles = StyleSheet.create({
  page: {
    padding: 25,
    paddingTop: 75,
    backgroundColor: 'bisque',
    flex: 1,
  }
});
