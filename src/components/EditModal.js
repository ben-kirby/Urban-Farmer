import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, Text, TouchableHighlight, View, Alert,TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { db, auth } from '../config';




let updateItem = (a, b, c)=>{
    auth.updateItem;
    db.ref("/user/products").update({ 
    name: a,
    price: b,
    quantity:c,
});
}
export default class EditModal extends Component {
    constructor(props){
        super(props);
        this.updateState = this.updateState.bind(this);
    }
    state = {
        modalVisible: false,
        item: this.props.item
    };
    
    static propTypes = {
        item: PropTypes.array.isRequired
    };

    componentWillReceiveProps() {
        this.updateState();
    }
    updateState(){      
    
        this.setState({
            item: 'item...'
        });
    }
              
  setModalVisible(visible) {
    this.setState({
        modalVisible: visible
    });
  }
  handleSubmit = () => {
    updateItem(this.state.name, this.state.price, this.state.quantity);
    alert('check update');
  };

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>
              <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.updateState({name:text})}
                placeholder={this.props.item.name}
            />
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.updateState({price:text})}
                placeholder={this.props.item.price}
            />
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.updateState({quantity:text})}
                placeholder={this.props.item.quantity}
            />
              <TouchableHighlight>


                <Button 
                title=' save update'
                onPress={() => {this.setModalVisible(!this.state.modalVisible);
                }}                     
                />
            
              </TouchableHighlight>
                <Button
                title='update'
              onPress={this.handleSubmit}                    
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
  