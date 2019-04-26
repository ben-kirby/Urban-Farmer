import React, { Component } from 'react';
import { View } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { db, auth } from "../config";
import Loading from '../components/Loading';

import styles from '../styles/stylesComponent';

export default class InventoryListScreen extends Component {
  state = {
    products: [],
  };

 
  handleDelete = (itemId) =>{  
    let userId = auth.currentUser.uid;  
    db.ref('products/' + userId).child(itemId).remove();
  }


  componentDidMount() {
    let uid = auth.currentUser.uid;
    db.ref("/products/" + uid).on("value", snapshot => {
      let items = snapshot.val();
      let data = [];
      {
        Object.keys(items).map(index => {
          data.push({
            id: index,
            uid: uid,
            name: items[index].name,
            price: items[index].price,
            quantity: items[index].quantity
          });
        });
      }
     
      let products = Object.values(data);
      this.setState({ products});
    });
  }

  render() {
    return (
      <View style={styles.scrollContainer}>
        {this.state.products.length > 0 ? (
          <ItemComponent products={this.state.products} delete={this.handleDelete}/>
        ) : (
          <Loading/>
        )}
      </View>
    );
  }
}