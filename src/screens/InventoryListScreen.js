import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { navigationOptions } from 'react-navigation';
import firebase, { db, auth } from '../config';


import { db, auth } from '../config';




export default class InventoryListScreen extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    let uid = auth.currentUser.uid;
    db.ref('/products/' + uid).on('value', snapshot => {
      let items = snapshot.val();
      let data = [];
      {Object.keys(items).map((index) => {
        data.push({
          id: index,
          uid: uid,
          name: items[index].name,
          price: items[index].price,
          quantity: items[index].quantity
        })
      }
      )}
      let products = Object.values(data);
      this.setState({ products });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.products.length > 0 ? (
          <ItemComponent products={this.state.products} />
        ) : (
          <Text>No Products :(</Text>
        )}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#ebebeb',
    flex: 1,
  },
  footer: {
    alignSelf: 'flex-end'

  }
});
