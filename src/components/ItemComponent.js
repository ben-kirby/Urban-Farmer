import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SoldModal from './SoldModal';
import EditModal from './EditModal';
import PropTypes from 'prop-types';
import styles from '../styles/stylesComponent';

export default class ItemComponent extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    refresh: PropTypes.func
  };

  render() {
      return(
        <View style={styles.itemCard}>
          <Text style={styles.itemtext}>{this.props.product.name}</Text>
          <View style={{alignItems:'center'}}>
          <SoldModal item={this.props.product}/> 
          <EditModal item={this.props.product} refresh={this.props.refresh}/>
          </View>
        </View>
    );
  }
}

