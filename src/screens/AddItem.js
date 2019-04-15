import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput
} from 'react-native';
import { db } from '../config';
import { Container, Header, Content, Item, Input } from 'native-base';

let addItem = item => {
  db.ref('/products').push({
    name: item
  });
};

export default class AddItem extends Component {
  state = {
    name: ''
  };

  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleSubmit = () => {
    addItem(this.state.name);
    alert('item saved!');
  };



  render(){
    return(
      <Container>
      <Header />
      <Content>
        
        <Item rounded
        style={styles.itemInput}
        onChange={this.handleChange}
        >
          <Input placeholder='Item Name'/>
        </Item>

        <Item rounded 
        style={styles.itemInput}
        onChange={this.handleChange}
        >
          <Input placeholder='Item QTY'/>
        </Item>

        <Item rounded
        style={styles.itemInput}
        onChange={this.handleChange} 
        >
          <Input placeholder='Item price'/>
        </Item>

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
        <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>


      </Content>
    </Container>
   
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
    margin: 5
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



//<View style={styles.main}>
    
//<Text style={styles.title}>Add Item</Text>
//<TextInput 
  
///>

//</View>