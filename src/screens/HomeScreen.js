import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { navigationOptions } from 'react-navigation';


export default class HomeScreen extends Component {

	static navigationOptions =
  {
    title: 'HomeScreen',
  };

	render () {
		return(
			<View>
				<Text>Home Screen</Text>
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
				<Button
					title="Create User"
					onPress={() => this.props.navigation.navigate('CreateUserScreen')}
				/>

			</View>

		);
	}

}
