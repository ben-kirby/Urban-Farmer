import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native';


export default class ItemComponent extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired
  };

  render() {
    return(
      <ScrollView style={StyleSheet.itemsList}>
        {this.props.products.map((item, index) => {
          return (
            <View style={styles.itemCard} key={index}>
              <Text style={styles.itemtext}>Product Name: {item.name}</Text>
              <Text style={styles.itemtext}>Price: {item.price}</Text>
              <Text style={styles.itemtext}>Quantity: {item.quantity}</Text>
              <Button
              title='edit'
              color="#841584"
              />
              <Button
              title="sold"
              color="#841584"
              />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    borderWidth:2,
    borderColor: 'black'
  },
  itemCard: {
    margin:10,
    backgroundColor :'#f9f4eb'
  }

});