import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

export default class ItemDetailScreen extends Component {
	handleSale = () => {
		Alert.alert('sale triggered')
	}

	render() {
		return(
			<View>
				<Text>{this.props.productName}</Text>
				<Text>{this.props.quantity} in stock</Text>
				<Text>${this.props.price}</Text>
				<Button
					title='Sell'
					onPress={this.handleSale}
				/>
				<Text></Text>

			</View>
		);
	}
}