import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, TouchableHighlight, View, Alert,TextInput, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import { auth, db } from '../config';
import OfflineNotice from './OfflineNotice';


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
        submitEmpty: false
      };
              
  setModalVisible(visible) {
    this.setState({
        modalVisible: visible
    });
  }

  handleDelete = (itemId) => {  
    let userId = auth.currentUser.uid;  
    db.ref('products/' + userId).child(itemId).remove();
  }

  deleteCombo = () => {
    this.props.refresh();
    this.handleDelete(this.state.itemId);
    this.setModalVisible(false);
  }

  updateCombo = () => {
    this.handleSubmit();
    this.setModalVisible(true);
  }

  handleNameVal = (nam) => {
    const reg = /^[a-zA-Z\s]*$/;
    let correctName = nam.match(reg) ? this.setState({submitValid: true, errorName: false}) : this.setState({errorName: true,  submitValid: false});
    this.setState({
    itemName: nam
    });
  }


  handlePriceVal = (pri) => {
    const reg = /^(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.[0-9]{2})?$/;
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
    const { itemName, itemPrice, itemQty } = this.state;
    if((this.nameInputRef && itemName)  && (this.priceInputRef && itemPrice) && (this.quantityInputRef && itemQty)){
      this.setState({submitEmpty: true})
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
      console.log("handle edit submit triggered");
      alert('item edited!');
      this.setState({
        submitEmpty: false
      });
    }

  };

  render() {
    console.log(this.props);
    let errorQtyVisible;
    let errorNameVisible;
    let errorPriceVisible;
    let errorSubmitVisible;
    this.state.errorName ? (errorNameVisible = <Text>Only accepts text input</Text>) : null;
    this.state.errorPrice ? (errorPriceVisible = <Text>Only accepts price format:XX.XX </Text>) : null;
    this.state.errorQty ? (errorQtyVisible = <Text>Only accepts a number</Text>) : null;
    (this.state.submitValid === false) ? (errorSubmitVisible = <Text>One or more invalid Inputs </Text>) : null;
    return (
      <View style={{marginTop: 22}}>
        <OfflineNotice/>
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
              ref={ref => this.nameInputRef = ref}
              style={styles.itemInput}
              onChangeText={(text) => this.handleNameVal(text)}
              placeholder={this.props.item.name}
              />
            {errorNameVisible}
            <TextInput
                ref={ref => this.priceInputRef = ref}
                style={styles.itemInput}
                onChangeText={(text) => this.handlePriceVal(text)}
                placeholder={this.props.item.price}
               
            />
            {errorPriceVisible}
            <TextInput
                ref={ref => this.quantityInputRef = ref}
                style={styles.itemInput}
                onChangeText={(text) => this.handleQtyVal(text)}
                placeholder={this.props.item.quantity}
               
            />
            {errorQtyVisible}
              <TouchableHighlight>

                <Button 
                title='Close Modal'           
                onPress={() => {this.setModalVisible(false);}} 
                />

              </TouchableHighlight>

              <Button
                title='update'
                onPress={this.updateCombo}                     
                />
              {errorSubmitVisible}
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
  