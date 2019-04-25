import React, { Component } from "react";
import { Text, TextInput, View, Button, ActivityIndicator, Image } from "react-native";
import { navigationOptions } from 'react-navigation';

import styles from '../styles/stylesComponent';
import OfflineNotice from '../components/OfflineNotice';

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchString: 'london'
        };
      }

    render() {
    return (
      <View style={styles.container}>
        <OfflineNotice/>
        <Text style={styles.description}>Search for Items!</Text>
        <Text style={styles.description}>Search by item name.</Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state}
            placeholder="Search via name or postcode"
          />
          <Button onPress={() => {}} color="#48BBEC" title="Go" />
        </View>
      </View>
    );
  }
}
