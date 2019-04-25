import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { navigationOptions } from "react-navigation";
import firebase, { db, auth } from "../config";
import Loading from '../components/Loading';
import OfflineNotice from '../components/OfflineNotice';

import styles from '../styles/stylesComponent';






export default class InventoryListScreen extends Component {
  state = {
    products: [],
    loading: true
  };

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
      this.setState({ products });
      if(this.state.products){
        this.setState({loading: false});
      }
    });
  }

  render() {
    let loadingIndicator;
    this.state.loading ? (loadingIndicator = <Loading/>) : null;
    return (
      <View style={styles.scrollContainer}>
        <OfflineNotice/>
        {loadingIndicator}
        <ItemComponent products={this.state.products} />
      </View>
    );
  }
}