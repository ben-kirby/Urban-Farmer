import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createMaterialTopTabNavigator, createAppContainer, navigationOptions } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import HomeScreen from './src/screens/HomeScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import InventoryListScreen from './src/screens/InventoryListScreen';
import SalesDetailScreen from './src/screens/SalesDetailScreen';
import SignInScreen from './src/screens/SignInScreen';
import CreateUserScreen from './src/screens/CreateUserScreen';

//consider splitting this into another file
const AuthStack = createSwitchNavigator(
  {
    SignIn: { screen: SignInScreen },
    CreateUser: { screen: CreateUserScreen },
  },
  {
    initialRouteName: 'SignIn',
    backBehavior: 'order',
  }
);

//consider splitting this into another file
export const MainFooterMenu = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      }
    },
    InventoryList: {
      screen: InventoryListScreen,
      navigationOptions: {
        title: 'View Inventory',
      }
    },
    AddItem: {
      screen: AddItemScreen,
      navigationOptions: {
        title: 'Add Inventory',
      }
    },
    SalesDetail: {
      screen: SalesDetailScreen,
      navigationOptions: {
        title: 'Sales Details',
      }
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {

    }
  }
);

const AppStack = createStackNavigator(
  {
    Main: {
      screen: MainFooterMenu,
      navigationOptions: {
        title: 'Urban Farmer',
        headerLeft: (<Button title='Icon'/>),
        headerRight: (<Button title='LogOut' onPress={() => alert('Put LogOut Here!')}/>),
      },
    },
  },
  {
    initialRouteName: 'Main',
  }
);

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
    backgroundColor: 'bisque'
  }
});
