import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';

let productData = {
	productName: 'Rutabaga',
	quantity: 5,
	price: 1.53
}

export default class ItemDetailScreen extends Component {
	state = {
		quantityToSell: 1,
		productName: 'Rutabaga',
		quantity: 5,
		price: 1.53
	}

	handleSale = () => {
		if (this.state.quantityToSell > this.state.quantity) {
			Alert.alert('You dont have enough in stock to sell than many');
		} else if (this.state.quantityToSell > 0) {
			let saleObject = {
				product: this.state.productName,
				quantitySold: this.state.quantityToSell,
				totalPrice: this.state.quantityToSell * this.state.price
			};
			let newQuantity = this.state.quantity - this.state.quantityToSell
			this.state.quantity = newQuantity;
			Alert.alert(saleObject.quantitySold + ' ' + saleObject.product + 'sold for a total of $' + saleObject.totalPrice)
			this.forceUpdate();
		}
	}

	handleAdd = () => {
		if (this.state.quantityToSell < this.state.quantity) {
			const add = this.state.quantityToSell + 1;
			this.setState({
				quantityToSell: add
			});
		}
	}

	handleSubtract = () => {
		if (this.state.quantityToSell > 1) {
			const subtract = this.state.quantityToSell - 1;
			this.setState({
				quantityToSell: subtract
			});
		}
	}

	render() {
		let sellUi;
		if (this.state.quantity == 0) {
			sellUi =
			<View>
				<Text>{this.state.productName}</Text>
				<Text>{this.state.quantity} in stock</Text>
				<Text>${this.state.price}</Text>
				<Button
						title='+'
						onPress={this.handleAdd}
						disabled='true'
					/>
					<Button
						title='-'
						onPress={this.handleSubtract}
						disabled = 'true'
					/>
					<Text>0</Text>
					<Button
						title='Sell'
						onPress={this.handleSale}
						disabled = 'true'
					/>
			</View>
		}
		else {
			sellUi =
			<View>
				<Text>{this.state.productName}</Text>
				<Text>{this.state.quantity} in stock</Text>
				<Text>${this.state.price}</Text>
				<Button
						title='+'
						onPress={this.handleAdd}
					/>
				<Button
					title='-'
					onPress={this.handleSubtract}
				/>
				<Text>{this.state.quantityToSell}</Text>
				<Button
					title='Sell'
					onPress={this.handleSale}
				/>
			</View>
		}
		return (
			<View>
				{sellUi}
			</View>
			);
	}
}
