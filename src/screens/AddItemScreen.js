import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight, StyleSheet, TextInput, Button } from 'react-native';
import firebase, { db } from '../config';

import { readData } from '../DataStorage';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/stylesComponent';

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
    uid: ''
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

  handleSubmit = () => {
    console.log(readData)
    addItem(this.state.name, this.state.price, this.state.quantity, this.state.uid);
    console.log("handle submit triggered")
    alert('item saved!');
  };

  render(){
    return(
      <ScrollView style={styles.scrollContainer}>

        <Text>Add Item</Text>
        <TextInput
          style={styles.itemInput}
          onChangeText={(text) => this.setState({name:text})}
          placeholder='Item name'
          />
        <TextInput
          style={styles.itemInput}
          onChangeText={(text) => this.setState({price:text})}
          placeholder='Item price'
          />
        <TextInput
          style={styles.itemInput}
          onChangeText={(text) => this.setState({quantity:text})}
          placeholder='Item quantity'
          />
        <Button
          onPress={this.handleSubmit}
          title='Add Item'
          />
      </ScrollView>
    );
  }
}
