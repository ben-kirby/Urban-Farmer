import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { navigationOptions } from 'react-navigation';

import { db } from '../config';

let productsRef = db.ref('/products');

export default class InventoryListScreen extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    productsRef.on('value', snapshot => {
      let data = snapshot.val();
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
    backgroundColor: '#ebebeb'
  },
  footer: {
    alignSelf: 'flex-end'

  }
});
