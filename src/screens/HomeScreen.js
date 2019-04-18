import React, { Component } from 'react';
import { View, Button, Alert, Card } from 'react-native';
import { navigationOptions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default class HomeScreen extends Component {

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		await AsyncStorage.getItem('@test_Key').then(response => {
			this.setState({
				testKey: response
			});
		});
	}

	signUserOut = async () => {
		try {
			await AsyncStorage.removeItem('uid').then(() => {
				this.props.navigation.navigate('AuthStack');
			});
		} catch (error) {
			Alert.alert(error.message)
		}
	}

	render () {
		return(
			<View>
				<Button
					title="*Add Item"
					onPress={() => this.props.navigation.navigate('AddItem')}
				/>
				<Button
					title="*Item List"
					color="green"
					onPress={() =>  this.props.navigation.navigate('InventoryList')}
				/>
				<Button
					title="*Sign In"
					onPress={() => this.props.navigation.navigate('SignIn')}
				/>
				<Button
					title="*Create User"
					onPress={() => this.props.navigation.navigate('CreateUser')}
				/>
				<Button
					title='Item Detail Page'
					onPress={() => this.props.navigation.navigate('SalesDetail')}
				/>

				<Button
					title='*Sign Out'
					onPress={this.signUserOut}
				/>
			</View>
		);
	}
}
