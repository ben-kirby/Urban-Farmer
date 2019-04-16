import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { navigationOptions } from 'react-navigation';


export default class SalesMainScreen extends Component {

	static navigationOptions =
  {
    title: 'SalesMain',
  };

	render () {
		return(
			<View>
				<Text>Sales Main Screen</Text>
			</View>
		)
  }
}
