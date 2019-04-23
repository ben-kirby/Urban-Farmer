import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import PropTypes from 'prop-types';
import firebase, { db, auth } from '../config';

export default class SoldModal extends Component {
    state = {
      modalVisible: false,
      originalItem: {
        itemId: this.props.item.id,
        itemName: this.props.item.name,
        itemPrice: this.props.item.price,
        itemQty: this.props.item.quantity,
        userId: this.props.item.uid,
        itemStock: this.props.item.quantity
      },
      quantityToSell: 0,
      purchase: false
    };
  
  setModalVisible = (visible) => {
    if(visible){
      this.setState({ quantityToSell: 0})
    }
    this.setState({ itemQty: this.state.itemStock });
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/quantity').set(this.state.itemQty);
    this.changeModalVisibility();
  }

  changeModalVisibility = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  handleCancel = () => {
    this.setState({
      quantityToSell: 0
    });
    this.changeModalVisibility();
  }

  createSale = () => {
    let sale = {
      item: this.props.item.name,
      unitPrice: this.props.item.price
    }
  }

  handleAdd = () => {
    if (this.state.originalItem.itemStock > this.state.quantityToSell) {
      const add = this.state.quantityToSell + 1;
			this.setState({
				quantityToSell: add
			});
		}
  }
  
  handleSubtract = () => {
		if (this.state.quantityToSell > 0) {
      const subtract = this.state.quantityToSell - 1;
			this.setState({
        quantityToSell: subtract
			});
		}
  }
  
  static propTypes = {
    item: PropTypes.object
  };

  render() {
    let purchaseButton;

    if (this.state.quantityToSell == 0) {
      purchaseButton = < Button
      title = "Purchase"
      disabled='true'/>

    } else {
      purchaseButton = < Button
      title = "Purchase"
      onPress = {() => {this.setModalVisible(!this.state.modalVisible)}}/>
    }

    return (
      <View style={{marginTop: 75}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 75}}>
          {(this.state.originalItem.itemQty  === 0) ? ( <View>
            <Text>Out of Stock. Please restock this product for purchase function</Text>
            <Button
              title="OK"
              onPress={this.changeModalVisibility}
            />
          </View>) : (
            <View>
            <Text>this.state.itemName:{this.state.originalItem.itemName}</Text>
				    <Text>this.state.itemQty: {this.state.originalItem.itemQty}</Text>
				    <Text>this.state.itemPrice: ${this.state.originalItem.itemPrice}</Text>
            <Text>this.state.quantityToSell: {this.state.quantityToSell}</Text>
            <Button
						title='+'
						onPress={this.handleAdd}
					/>
					<Button
						title='-'
						onPress={this.handleSubtract}
					/>
          {purchaseButton}
          <Button
            title="Cancel"
            onPress={this.handleCancel}
          />
            </View>
          )}
          </View>
        </Modal>

        <TouchableHighlight>
          <Button 
          title='Sell'
          onPress={this.changeModalVisibility}
          />
        </TouchableHighlight>
      </View>
    );
  }
}