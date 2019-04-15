import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image
} from "react-native";
import { navigationOptions } from 'react-navigation';


export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchString: 'london'
        };
      }

      static navigationOptions =
      {
        title: 'SearchScreen',
      };

    render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: "center"
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },

});
