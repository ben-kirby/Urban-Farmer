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
      quantityToSell: 0
    };


  setModalVisible (visible) {
    console.log('userId', this.state.userId);
    console.log('itemId', this.state.itemId);
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/quantity').set(this.state.itemQty);
    this.setState({
        modalVisible: visible
    });
  }

  handleAdd = () => {
    console.log(this.state.quantityToSell);
    console.log('itemqty', this.state.itemQty);
    if (this.state.itemQty > 0) {
      const add = this.state.quantityToSell + 1;
      const itemStock = this.state.itemQty - 1;
			this.setState({
        itemQty: itemStock,
				quantityToSell: add
			});
		}
  }
  
  handleSubtract = () => {
    console.log('itemqty', this.state.itemQty);
		if (this.state.quantityToSell > 0) {
      const subtract = this.state.quantityToSell - 1;
      const itemStock = this.state.itemQty + 1;
			this.setState({
        itemQty: itemStock,
        quantityToSell: subtract
			});
		}
  }
  

  static propTypes = {
    item: PropTypes.object
  };



  render() {
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
            <View>
            <Text>{this.state.itemName}</Text>
				    <Text>{this.state.itemQty}</Text>
				    <Text>${this.state.itemPrice}</Text>
            <Text>{this.state.quantityToSell}</Text>
            <Button
						title='+'
						onPress={this.handleAdd}
					/>
					<Button
						title='-'
						onPress={this.handleSubtract}
					/>
          <Button
            title="Done"
              onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            />
            </View>
          </View>
        </Modal>

        <TouchableHighlight>
          <Button 
          title='sold'
          onPress={() => {this.setModalVisible(true)}}
          />
        </TouchableHighlight>
      </View>
    );
  }
}