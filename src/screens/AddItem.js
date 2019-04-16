import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import firebase, { db } from '../config';

let addItem = (a, b, c) => {
  db.ref('/products').push({
    name: a,
    price: b,
    quantity: c
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
    price: '',
    quantity: ''

  };


  handleSubmit = () => {
    addItem(this.state.name, this.state.price, this.state.quantity);
    alert('item saved!');
  };



  render(){
    return(
      <View style={styles.main}>
        <Text style={styles.title}>Add Item</Text>
        <TextInput 
          style={styles.itemInput}
          onChangeText={(text) => this.setState({name:text})}
          placeholder="name"
        />
        <TextInput 
          style={styles.itemInput}
          onChangeText={(text) => this.setState({price:text})}
          placeholder="price"
        />
        <TextInput 
          style={styles.itemInput}
          onChangeText={(text) => this.setState({quantity:text})}
          placeholder="qunatity"
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
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
    backgroundColor: '#6565fc'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});