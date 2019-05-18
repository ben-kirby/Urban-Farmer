import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet, TextInput, Button } from 'react-native';
import { db } from '../config.js';

import { readData } from '../DataStorage';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/stylesComponent';
import OfflineNotice from '../components/OfflineNotice';

let addItem = (a, b, c, uid) => {
  db.ref('/products/' + uid).push({
    name: a,
    price: b,
    quantity: c
  });
};

export default class AddItemScreen extends Component {
  state = {
    name: null,
    price: null,
    quantity: null,
    uid: null,
    errorQty: false,
    errorPrice: false,
    errorName: false,
    submitValid: true,
    submitEmpty: false
  };

  async getUserId(){
    try {
      const response = await AsyncStorage.getItem('uid');
      this.setState({uid: response});
    }
    catch (error) {
      console.log("Error while storing the token");
    }
  }

  componentDidMount() {
    this.getUserId();
  }
  
  handleChangeName = (text) => {
    const reg = /^[a-zA-Z\s]*$(?![\s\S])/;
    let correctName = text.match(reg) ? this.setState({submitValid: true, errorName: false}) : this.setState({errorName: true,  submitValid: false});
    this.setState({name:text});
  }

  handleChangePrice = (text) => {
    const reg = /^(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.[0-9]{2})?$/;
    let correctPrice = text.match(reg) ? this.setState({submitValid: true, errorPrice: false}) : this.setState({errorPrice: true, submitValid: false});
    this.setState({price:text});
  }
  
  handleChangeQuantity = (text) => {
    const reg = /^[1-9]\d*$/;
    let correctEntry = text.match(reg) ? this.setState({submitValid: true, errorQty: false}) : this.setState({errorQty: true, submitValid: false});
    this.setState({quantity:text});
  }   

  checkInputEmpty = () => {
    const { name, price, quantity } = this.state;
    if((this.nameInputRef && name)  && (this.priceInputRef && price) && (this.quantityInputRef && quantity)){
      this.setState({submitEmpty: true})
    } else {
      alert('Please fill all the fields');
    }
  } 

  handleSubmit = () => {
    console.log(readData);
    this.checkInputEmpty();
    if(this.state.submitValid && this.state.submitEmpty){
      addItem(this.state.name, this.state.price, this.state.quantity, this.state.uid);
      this.nameInputRef.clear();
      this.priceInputRef.clear();
      this.quantityInputRef.clear();
      this.setState({
        name: null,
        quantity: null,
        price: null,
        submitEmpty: false
      });
      alert('item saved!');
    }
  };


  render(){
    let errorQtyVisible;
    let errorNameVisible;
    let errorPriceVisible;
    let errorSubmitVisible;
    this.state.errorName ? (errorNameVisible = <Text style={styles.errorMessage}>
      Only accepts text input</Text>) : null;
    this.state.errorPrice ? (errorPriceVisible = <Text style={styles.errorMessage} >Only accepts price format:XX.XX</Text>) : null;
    this.state.errorQty ? (errorQtyVisible = <Text style={styles.errorMessage} >Only accepts a number</Text>) : null;
    (this.state.submitValid === false) ? (errorSubmitVisible = <Text style={styles.errorMessage} >One or more invalid Inputs</Text>) : null;
    return(
    <View style={styles.container}>
      <OfflineNotice/>

      <Text style={styles.title}>Add Item</Text>
      <TextInput
        ref={ref => this.nameInputRef = ref}
        style={this.state.errorName ? styles.errorInput: styles.itemInput}
        onChangeText={this.handleChangeName}
        placeholder='Item name'
      />
      {errorNameVisible}
      <TextInput
        ref={ref => this.priceInputRef = ref}
        style={this.state.errorPrice ? styles.errorInput: styles.itemInput}
        onChangeText={this.handleChangePrice}
        placeholder='Item price'
      />
      {errorPriceVisible}
      <TextInput
        ref={ref => this.quantityInputRef = ref}
        style={this.state.errorQty ? styles.errorInput: styles.itemInput}
        onChangeText={this.handleChangeQuantity}
        placeholder='Item quantity'
      />
      {errorQtyVisible}
      <View style={{alignItems:'center'}}>
     <TouchableHighlight
     style={styles.button}
       onPress={this.handleSubmit}     
     >
         <Text style={{color:'white'}}>Add Item</Text>
         </TouchableHighlight>

      </View>
      {errorSubmitVisible}
      </View>
    );
  }
}
