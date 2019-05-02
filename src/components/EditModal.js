import React, {Component} from 'react';
import {Modal, TouchableHighlight, View, Alert,TextInput, Text} from 'react-native';
import PropTypes from 'prop-types';
import { auth, db } from '../config';
import OfflineNotice from './OfflineNotice';
import styles from '../styles/stylesComponent';


export default class EditModal extends Component {
    constructor(props){
        super(props);
    }
    static propTypes = {
      item: PropTypes.object,
      refresh: PropTypes.func
    };
    state = {
        modalVisible: false,
        itemId: this.props.item.id,
        itemName: this.props.item.name,
        itemPrice: this.props.item.price,
        itemQty: this.props.item.quantity,
        userId: this.props.item.uid,
        errorQty: false,
        errorPrice: false,
        errorName: false,
        submitValid: true,
        submitEmpty: true
      };
              
  setModalVisible(visible) {
    this.setState({
        modalVisible: visible
    });
  }

  handleDelete = (itemId) => {  
    let userId = auth.currentUser.uid;  
    db.ref('products/' + userId).child(itemId).remove();
    alert('item Deleted!');
  }

  deleteCombo = () => {
    this.props.refresh();
    this.handleDelete(this.state.itemId);
    this.setModalVisible(false);
  }

  updateCombo = () => {
    this.handleSubmit();
    this.setModalVisible(false);
  }

  handleNameVal = (nam) => {
    const reg = /^[a-zA-Z\s]*$/;
    let correctName = nam.match(reg) ? this.setState({submitValid: true, errorName: false}) : this.setState({errorName: true,  submitValid: false});
    this.setState({
    itemName: nam
    });
  }


  handlePriceVal = (pri) => {
    const reg = /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/;
    let correctPrice = pri.match(reg) ? this.setState({submitValid: true, errorPrice: false}) : this.setState({errorPrice: true, submitValid: false});
    this.setState({
     itemPrice: pri
    })
  }
  handleQtyVal = (qty) => {
    const reg = /^[1-9]\d*$/;
    let correctQuantity = qty.match(reg) ? this.setState({submitValid: true, errorQty: false}) : this.setState({errorQty: true, submitValid: false});
    this.setState({
      itemQty: qty
    });
  }

  checkInputEmpty = () => {
    const { name, price, quantity } = this.state;
    if(name === null && price === null && quantity === null){
      this.setState({submitEmpty: false});
    }
  } 


  handleSubmit = () => {
    this.checkInputEmpty();
    if(this.state.submitValid && this.state.submitEmpty){ 
      db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/name').set(
      this.state.itemName
    );
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/price').set(
      this.state.itemPrice
      );
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/quantity').set(
      this.state.itemQty
      );
      alert('item edited!');
    }

  };

  render() {
    let errorQtyVisible;
    let errorNameVisible;
    let errorPriceVisible;
    let errorSubmitVisible;
    this.state.errorName ? (errorNameVisible = <Text>text only, no numbers and special characters</Text>) : null;
    this.state.errorPrice ? (errorPriceVisible = <Text>numbers only, no text and special characters</Text>) : null;
    this.state.errorQty ? (errorQtyVisible = <Text>please enter a number</Text>) : null;
    (this.state.submitValid === false) ? (errorSubmitVisible = <Text>please correct the inputs</Text>) : null;
    return (
      <View style={styles.modalContainer}>
        <OfflineNotice/>
        
        <Modal
        
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Please save chagnes.');
          }}>
          <View style={{marginTop: 22}} >
            <View>

              <TextInput
              style={styles.itemInput}
              onChangeText={(text) => this.handleNameVal(text)}
              placeholder={this.props.item.name}
              />
            {errorNameVisible}
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.handlePriceVal(text)}
                placeholder={this.props.item.price}
               
            />
            {errorPriceVisible}
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.handleQtyVal(text)}
                placeholder={this.props.item.quantity}
               
            />
            {errorQtyVisible}
            <View style={styles.buttonLayout} >

              <View>
              <TouchableHighlight
                style={styles.button}
                onPress={this.deleteCombo}                  
              >
              <Text style={{color:'black'}}>Delete</Text>
              </TouchableHighlight>
              </View>

              <View>
              <TouchableHighlight
                style={styles.button}
                onPress={this.updateCombo}                     
              >
                <Text style={{color:'black'}}>Update</Text>
              </TouchableHighlight>
              </View>

              {errorSubmitVisible}

              <View >
                <TouchableHighlight
                style={styles.button}
                onPress={() => {this.setModalVisible(false);}} 
                >
                <Text style={{color:'black'}}>Cancel</Text>
                </TouchableHighlight>
              </View>
             
            </View>
           
            </View>
          </View>
        </Modal>

        <TouchableHighlight
        style={styles.button}
         onPress={() => {this.setModalVisible(true);}}
        >
         
          <Text>Edit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

