import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import PropTypes from 'prop-types';
import firebase, { db, auth } from '../config';

export default class SoldModal extends Component {
  state = {
    modalVisible: false,
    itemId: this.props.item.id,
    itemName: this.props.item.name,
    itemPrice: this.props.item.price,
    itemQty: this.props.item.quantity,
    userId: this.props.item.uid,
    itemStock: this.props.item.quantity,
    quantityToSell: 0,
    purchase: false
  };
  
  handlePurchase = () => {
    let newQty = this.state.itemQty - this.state.quantityToSell;
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/quantity').set(newQty);
    this.handleCloseModal();
  }

  handleCloseModal = () => {
    this.resetQuantityToSell();
    this.toggleModalVisibility();
  }
  
    handleAdd = () => {
      if (this.state.itemStock > this.state.quantityToSell) {
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
    
  toggleModalVisibility = () => {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  };

  resetQuantityToSell = () => {
    this.setState({
      quantityToSell: 0
    });
  }

  createSale = () => {
    let sale = {
      item: this.props.item.name,
      unitPrice: this.props.item.price
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
      onPress = {this.handlePurchase}/>
    }

    return (
      <View style={{marginTop: 25}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 75}}>
          {(this.state.itemQty  === 0) ? ( 
          <View>
            <Text>Out of Stock.</Text>
            <Button
              title="OK"
              onPress={this.toggleModalVisibility}
            />
          </View>) : (
          <View>
            <Text>this.state.itemName:{this.state.itemName}</Text>
				    <Text>this.state.itemQty: {this.state.itemQty}</Text>
				    <Text>this.state.itemPrice: ${this.state.itemPrice}</Text>
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
            onPress={this.handleCloseModal}
          />
            </View>
          )}
          </View>
        </Modal>

        <TouchableHighlight>
          <Button 
          title='Sell'
          onPress={this.toggleModalVisibility}
          />
        </TouchableHighlight>
      </View>
    );
  }
}