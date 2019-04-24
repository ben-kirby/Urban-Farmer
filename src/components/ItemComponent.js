import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import SoldModal from './SoldModal';
import EditModal from './EditModal';



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
              <Text style={styles.itemtext}>Product Name: {item.name} </Text>
              
              <EditModal item={item}/>
              <SoldModal item={item}/>
             
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

    marginTop:10,
    marginRight:10,
    marginLeft:10,
    backgroundColor :'#f9f4eb'
  }

});