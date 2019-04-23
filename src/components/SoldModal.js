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

  createSale = () => {
    let sale = {
      item: this.props.item.name,
      unitPrice: this.props.item.price
    }
  }

  handleAdd = () => {
    if (this.state.itemStock > 0) {
      const add = this.state.quantityToSell + 1;
      const itemStock = this.state.itemStock - 1;
			this.setState({
        itemStock: itemStock,
				quantityToSell: add
			});
		}
  }
  
  handleSubtract = () => {
		if (this.state.quantityToSell > 0) {
      const subtract = this.state.quantityToSell - 1;
      const itemStock = this.state.itemStock + 1;
			this.setState({
        itemStock: itemStock,
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
      disabled='true'
      />
    } else {
      purchaseButton = < Button
      title = "Purchase"
      onPress = {
        () => {
          this.setModalVisible(!this.state.modalVisible);
        }
      }
      />
    }


    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
          {(this.state.itemQty  === 0) ? ( <View>
            <Text>Out of Stock. Please restock this product for purchase function</Text>
            <Button
            title="OK"
              onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            />
          </View>) : (
            <View>
            <Text>Product Name:{this.state.itemName}</Text>
				    <Text>Product Qty: {this.state.itemQty}</Text>
				    <Text>Product Price: ${this.state.itemPrice}</Text>
            <Text>Cart: {this.state.quantityToSell}</Text>
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
            onPress={this.changeModalVisibility}
          />
            </View>
          )}
          </View>
        </Modal>

        <TouchableHighlight>
          <Button 
          title='Sell'
          onPress={() => {this.setModalVisible(true)}}
          />
        </TouchableHighlight>
      </View>
    );
  }
}