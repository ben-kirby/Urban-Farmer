import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, TouchableHighlight, View, Alert,TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { db } from '../config';


export default class EditModal extends Component {
    constructor(props){
        super(props);
    }
    static propTypes = {
      item: PropTypes.object,
      delete: PropTypes.func
    };
    state = {
        modalVisible: false,
        itemId: this.props.item.id,
        itemName: this.props.item.name,
        itemPrice: this.props.item.price,
        itemQty: this.props.item.quantity,
        userId: this.props.item.uid,
      };
      
  
              
  setModalVisible(visible) {
    this.setState({
        modalVisible: visible
    });
  }

  deleteCombo= () =>{
    this.props.delete(this.state.itemId);
    this.setModalVisible(false);
  }

  updateCombo = () =>{
    this.handleSubmit();
    this.setModalVisible(false);
  }

  handleNameVal = (nam) => {
    this.setState({
    itemName: nam
    })
  }
  handlePriceVal = (pri) => {
    this.setState({
     itemPrice: pri
    })
  }
  handleQtyVal = (qty) => {
    this.setState({
      itemQty: qty
    })
  }


  handleSubmit = () => {
      
      db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/name').set(
      this.state.itemName
    );
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/price').set(
      this.state.itemPrice
      );
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/quantity').set(
      this.state.itemQty
      );
      
  };
s
  render() {
    console.log(this.props);
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

              <TextInput
              style={styles.itemInput}
              onChangeText={(text) => this.handleNameVal(text)}
              placeholder={this.props.item.name}
              />
             
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.handlePriceVal(text)}
                placeholder={this.props.item.price}
               
            />
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.handleQtyVal(text)}
                placeholder={this.props.item.quantity}
               
            />
              <TouchableHighlight>

                <Button 
                title='Close Modal'           
                onPress={() => {this.setModalVisible(!this.state.modalVisible);
                }} 
                />

              </TouchableHighlight>

              <Button
                title='update'
                onPress={this.updateCombo}                     
                />
            
                  <Button
                title='Delete'
                onPress={this.deleteCombo}                     
                />
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

const styles = StyleSheet.create({
    main: {
      flex: 1,
      padding: 30,
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    title: {
      marginTop: 10,
      fontSize: 25,
      textAlign: 'center'
    },
    itemInput: {
      height: 50,
      padding: 4,
      margin: 5,
      borderRadius: 4,
      borderWidth:1,
      borderColor: 'black'
    },
    buttonText: {
      fontSize: 18,
      color: '#111',
      alignSelf: 'center'
    },
    button: {
      height: 45,
      flexDirection: 'row',
      backgroundColor: '#6e5cff',
      borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      marginTop: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    }
  });
  