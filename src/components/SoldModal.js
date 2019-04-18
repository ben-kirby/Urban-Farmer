import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import PropTypes from 'prop-types';

export default class SoldModal extends Component {
    state = {
      modalVisible: false,
      item: this.props.item
    };


  setModalVisible (visible) {
    console.log(this.props.item);
    this.setState({
        modalVisible: visible
    });
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
            <Text>{this.props.item.name}</Text>
				    <Text>{this.props.item.quantity}</Text>
				    <Text>{this.props.item.price}</Text>
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
          onPress={() => {this.setModalVisible(true);}}
          />
        

        </TouchableHighlight>
      </View>
    );
  }
}