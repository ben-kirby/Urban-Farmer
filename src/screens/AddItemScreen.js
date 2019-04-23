import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import firebase, { db } from '../config';

import { readData } from '../DataStorage';
import AsyncStorage from '@react-native-community/async-storage';



let addItem = (a, b, c, uid) => {
  db.ref('/products/' + uid).push({
    name: a,
    price: b,
    quantity: c
  });
};

export default class AddItemScreen extends Component {
  state = {
    name: '',
    price: '',
    quantity: '',
    uid: '',
    errorQty: false,
    errorPrice: false,
    errorName: false,
    submitValid: true
  };


 async getUserId(){
   try {
     const response = await AsyncStorage.getItem('uid');
       alert(response);
       console.log(response);
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
    const reg = /^[a-zA-Z]+$/;
    let correctName = text.match(reg) ? this.setState({submitValid: true, errorName: false}) : this.setState({errorName: true,  submitValid: false});
    this.setState({name:text});
  }

  handleChangePrice = (text) => {
    const reg = /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/;
    let correctPrice = text.match(reg) ? this.setState({submitValid: true, errorPrice: false}) : this.setState({errorPrice: true, submitValid: false});
    this.setState({price:text});
  }
  
  handleChangeQuantity = (text) => {
    const reg = /^[1-9]\d*$/;
    let correctEntry = text.match(reg) ? this.setState({submitValid: true, errorQty: false}) : this.setState({errorQty: true, submitValid: false});
    this.setState({quantity:text});
  }   

  handleSubmit = () => {
    console.log(readData)
    if(this.state.submitValid){
      addItem(this.state.name, this.state.price, this.state.quantity, this.state.uid);
      this.priceInputRef.clear();
      console.log("handle submit triggered");
      alert('item saved!');
    }
  };



  render(){
    let errorQtyVisible;
    let errorNameVisible;
    let errorPriceVisible;
    let errorSubmitVisible;
    this.state.errorName ? (errorNameVisible = <Text>letters only, no numbers and special characters</Text>) : null;
    this.state.errorPrice ? (errorPriceVisible = <Text>numbers only, no text and special characters</Text>) : null;
    this.state.errorQty ? (errorQtyVisible = <Text>please enter a number</Text>) : null;
    (this.state.submitValid === false) ? (errorSubmitVisible = <Text>please correct the inputs</Text>) : null;
    return(
     
      <View style={styles.main}>

      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.itemInput}
        onChangeText={this.handleChangeName}
        placeholder='Item name'
      />
      {errorNameVisible}
      <TextInput
        ref={ref => this.priceInputRef = ref}
        style={styles.itemInput}
        value={this.state.price}
        onChangeText={this.handleChangePrice}
        placeholder='Item price'
      />
      {errorPriceVisible}
      <TextInput
        style={styles.itemInput}
        onChangeText={this.handleChangeQuantity}
        placeholder='Item quantity'
      />
      {errorQtyVisible}
      <TouchableHighlight
        style={styles.button}
        
        onPress={this.handleSubmit}
      >
       <Text style={styles.buttonText}>Add</Text>
      </TouchableHighlight>
      {errorSubmitVisible}

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
