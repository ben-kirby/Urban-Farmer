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
    alert('item saved!');
  };

  render(){
    return(
     
      <View style={styles.main}>

      <Text style={styles.title}>Add Item</Text>
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
      <TouchableHighlight
        style={styles.button}
        
        onPress={this.handleSubmit}

      >
        <Text style={styles.buttonText}>Add</Text>
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
