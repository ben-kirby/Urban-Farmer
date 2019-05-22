import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet, TextInput, Button } from 'react-native';
import { db, auth } from '../config.js';

import { readData } from '../DataStorage';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/stylesComponent';
import OfflineNotice from '../components/OfflineNotice';

export default class AddItemScreen extends Component {
  state = {
    name: null,
    price: null,
    quantity: null,
    uid: null,
    nameEmpty: true,
    priceEmpty: true,
    quantityEmpty: true,
    errorQty: false,
    errorPrice: false,
    errorName: false,
    submitValid: true,
    submitEmpty: false
  };
  
  componentDidMount() {
    this.getUserId();
  }

  checkEmpty = (text) => {
    if (text != '') {
      return true
    } else {
      return false
    }
  };

  handleNameChange = (text) => {
    if (this.checkEmpty(text)) {
      const reg = /^[a-zA-Z\s]*$(?![\s\S])/;
      let correctName = text.match(reg) ? (
        this.setState({ 
          submitValid: true, 
          errorName: false,
          nameEmpty: false
      })
      ) : (
        this.setState({ 
          errorName: true, 
          submitValid: false
        })
      );
      this.setState({ name: text });
    };
  };

  handlePriceChange = (text) => {
    if (this.checkEmpty(text)) {
      const reg = /^(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.[0-9]{2})?$/;
      let correctPrice = text.match(reg) ? (
        this.setState({ 
          submitValid: true, 
          errorPrice: false,
          priceEmpty: false
        })
      ) : (
        this.setState({ 
          errorPrice: true, 
          submitValid: false 
        })
      );
      this.setState({ price: text });
    };
  };

  handleQuantityChange = (text) => {
    if (this.checkEmpty(text)) {
      const reg = /^[1-9]\d*$/;
      let correctEntry = text.match(reg) ? (
        this.setState({ 
          submitValid: true, 
          errorQty: false ,
          quantityEmpty: false
        })
      ) : (
        this.setState({ 
          errorQty: true, 
          submitValid: false 
        })
      );
      this.setState({ quantity: text });
    };
  };

  addItem = async (uid) => {
     db.ref('/products/' + this.state.uid).push({
       name: this.state.name,
       price: this.state.price,
       quantity: this.state.quantity
     });
     alert('Item Saved');
   };

   getUserId = async () => {
     try {
       AsyncStorage.getItem('uid').then((response) => {
         this.setState({uid: response});
       });
     }
     catch (error) {
       console.log("Error while grabbing User ID");
     }
   }

   handleFormSubmit = () => {     
    if (this.state.submitValid) {
      if (
        this.state.nameEmpty == false &&
        this.state.priceEmpty == false &&
        this.state.quantityEmpty == false
      ) {
        this.addItem();
        this.nameInputRef.clear();
        this.priceInputRef.clear();
        this.quantityInputRef.clear();
        this.setState({
          name: null,
          quantity: null,
          price: null,
          submitValid: true,
          nameEmpty: true,
          priceEmpty: true,
          quantityEmpty: true
        });
      } else { 
        alert('Please fill out all fields');
      }
    }
   }

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
          onChangeText={this.handleNameChange}
          placeholder='Item name'
        />

        {errorNameVisible}
        <TextInput
          ref={ref => this.priceInputRef = ref}
          style={this.state.errorPrice ? styles.errorInput: styles.itemInput}
          onChangeText={this.handlePriceChange}
          placeholder='Item price'
        />

        {errorPriceVisible}
        <TextInput
          ref={ref => this.quantityInputRef = ref}
          style={this.state.errorQty ? styles.errorInput: styles.itemInput}
          onChangeText={this.handleQuantityChange}
          placeholder='Item quantity'
        />

        {errorQtyVisible}
        <View style={{alignItems:'center'}}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleFormSubmit}>
          <Text style={{color:'white'}}>Add Item</Text>
          </TouchableHighlight>
        </View>
      {errorSubmitVisible}
      </View>
    );
  }
}
