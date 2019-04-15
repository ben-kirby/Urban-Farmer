import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { navigationOptions } from 'react-navigation';


export default class Home extends Component {

  static navigationOptions =
  {
    title: 'Home',
  };

  render () {
    return(
      <View>
        <Text>Home Screen Text</Text>
        <Button
          title="Add Item"
          onPress={() => this.props.navigation.navigate('AddItem')}
        />
        <Button
          title="Item List"
          color="green"
          onPress={() =>  this.props.navigation.navigate('InventoryList')}
        />
        <Button
          title="Sign In"
          onPress={() => this.props.navigation.navigate('SignInScreen')}
        />

      </View>

    )
  }

}
