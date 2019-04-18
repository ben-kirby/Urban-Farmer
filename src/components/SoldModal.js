import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class SoldModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({
        modalVisible: visible
    });
  }

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
            <Text>product name here</Text>
				    <Text> in stock</Text>
				    <Text>product price</Text>



            <Button
            title="sold"
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