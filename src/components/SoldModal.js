import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import PropTypes from 'prop-types';

export default class SoldModal extends Component {
    state = {
      modalVisible: false,
      itemName: this.props.item.name,
      itemPrice: this.props.item.price,
      itemQty: this.props.item.quantity,
      quantityToSell: 0
    };


  setModalVisible (visible) {
    console.log(this.state.itemName);
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
  
  handleUpdateFirebase = () => {
    
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