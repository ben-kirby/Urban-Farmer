import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
const { width } = Dimensions.get('window');


function MiniOfflineSign() {
    return (
        <Text style={styles.offlineText}>No Internet Connection</Text>
    );
  }


export default class OfflineNotice extends Component {
    state = {
        isConnected: true
      };

      componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
      }
    
      componentWillUnmount() {
        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
      }

      handleConnectivityChange = isConnected => {
        if (isConnected) {
          this.setState({ isConnected });
        } else {
          this.setState({ isConnected });
        }
      };

      render() {
        if (!this.state.isConnected) {
          return <MiniOfflineSign />;
        }
        return null;
      }
}

const styles = StyleSheet.create({
  offlineText: { 
    color: '#fff',
    backgroundColor: '#b52424',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});
