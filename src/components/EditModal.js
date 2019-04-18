import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';


export default class EditModal extends Component {
    
  state = {
    modalVisible: false,
    product:[]
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
              <Text>Hello World!</Text>
                
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight>
         
          <Button 
          title='Edit'
          onPress={() => {this.setModalVisible(true);}}
          />
        

        </TouchableHighlight>
      </View>
    );
  }
}