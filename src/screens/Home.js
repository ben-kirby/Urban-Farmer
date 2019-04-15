import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {
	state = {
		testKey: null
	}

	componentDidMount() {
		this.getData();
	}

	storeData = async () => {
		try {
			await AsyncStorage.setItem('@test_Key', 'Bens Local Test')
			Alert.alert('stored')
		} catch (e) {		
			Alert.alert(e);
		}
	}

	getData = async () => {
		await AsyncStorage.getItem('@test_Key').then(response => {
			this.setState({
				testKey: response
			});
		});
	}

	

	removeFromLocal = () => {
		Alert.alert('Remove pressed')
	}

	render () {
		return(
			<View>
				<Text>Home</Text>
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
				<Button
					title='Add to local storage'
					onPress={this.storeData}
				/>
				<Button
					title='update state'
					onPress={this.getData}
				/>
				<Text>{this.state.testKey}</Text>
         
			</View>
      
		);
	}

}