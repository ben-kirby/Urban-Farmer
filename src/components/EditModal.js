import React, {Component} from 'react';
import { Button } from 'react-native';
import {Modal, TouchableHighlight, View, Alert,TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { db, auth } from '../config';



export default class EditModal extends Component {
    constructor(props){
        super(props);
    }
    static propTypes = {
      item: PropTypes.object
    };
    state = {
        modalVisible: false,
        itemId: this.props.item.id,
        itemName: this.props.item.name,
        itemPrice: this.props.item.price,
        itemQty: this.props.item.quantity,
        userId: this.props.item.uid
      };
      
  
              
  setModalVisible(visible) {
    console.log(visible)
    this.setState({
        modalVisible: visible
    });
  }
  handleDelete = () =>{
    
    db.ref('products/' + this.state.userId ).child(this.state.itemId).remove();
  }

  handleSubmit = () => {

    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/name').set(
      this.state.itemName
    );
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/price').set(
      this.state.itemPrice
      );
    db.ref('products/' + this.state.userId + '/' + this.state.itemId + '/quantity').set(
      this.state.itemQty
      );
      
  };
s
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

              <TextInput
              style={styles.itemInput}
              onChangeText={(text) => this.setState({itemName:text})}
              placeholder={this.props.item.name}
              />
             
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.setState({itemPrice:text})}
                placeholder={this.props.item.price}
               
            />
            <TextInput
                style={styles.itemInput}
                onChangeText={(text) => this.setState({itemQty:text})}
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
                title=' update'
                onPress={this.handleSubmit}                    
        
                />
            
                  <Button
                title='Delete'
                onPress={this.handleDelete}     
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
  