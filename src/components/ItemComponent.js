import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import SoldModal from './SoldModal';
import EditModal from './EditModal';
import { db, auth } from '../config';

export default class ItemComponent extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    refresh: PropTypes.func
  };

  
  render() {
      return(
        <View style={styles.itemCard}>
          <Text style={styles.itemtext}>{this.props.product.name} </Text>
          <EditModal item={this.props.product} refresh={this.props.refresh}/>
          <SoldModal item={this.props.product}/>
        </View>
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

    marginTop:10,
    marginRight:10,
    marginLeft:10,
    backgroundColor :'#f9f4eb'
  }

});