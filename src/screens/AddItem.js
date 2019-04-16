import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import { db } from '../config';

let addItem = (a, b, c) => {
  db.ref('/products').push({
    name: a,
    quantity: b,
    price: c
  });
};

export default class AddItem extends Component {
  state = {
    name: '',
    quantity: '',
    price:''
  };
  
  
  handleSubmit = () => {
    addItem(this.state.name, this.state.quantity, this.state.price)
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
