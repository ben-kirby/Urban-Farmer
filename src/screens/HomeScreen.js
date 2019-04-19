import React, { Component } from 'react';
import { ScrollView, Button, View, StyleSheet, Dimensions } from 'react-native';
import { Card, CardItem, Text, Body} from "native-base";
import { navigationOptions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Image from 'react-native-scalable-image';

export default class HomeScreen extends Component {

	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		await AsyncStorage.getItem('@test_Key').then(response => {
			this.setState({
				testKey: response
			});
		});
	}

	signUserOut = async () => {
		try {
			await AsyncStorage.removeItem('uid').then(() => {
				this.props.navigation.navigate('AuthStack');
			});
		} catch (error) {
			alert(error.message)
		}
	}

	render () {
		return(
			<ScrollView style={styles.container}>
				<Button
					title='*Sign Out'
					onPress={this.signUserOut}
				/>

          <Card>
            <CardItem header bordered>
              <Text>Sales vs. Time, for {'April 2019'}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
								<View style={{flex: 1, width: Dimensions.get('window').width, justifyContent: 'center', alignItems: 'center'}}>
                	<Image
										style={styles.image}
										source={require('../img/salesGraph.gif')}
									/>
								</View>
              </Body>
            </CardItem>
          </Card>

					<Card>
						<CardItem header bordered>
							<Text>Transaction Counts for {'April 2019'}</Text>
						</CardItem>
						<CardItem bordered>
							<Body>
								<Text>
									{'40'} transactions in the past month.
								</Text>
							</Body>
						</CardItem>
					</Card>

					<Card>
						<CardItem header bordered>
							<Text>KPI info for {'April 2019'}</Text>
						</CardItem>
						<CardItem bordered>
							<Body>
								<Text>
									Averaged {'$7.77'} per transaction.
								</Text>
								<Text>
									Average sale was {'12'} items.
								</Text>
							</Body>
						</CardItem>
					</Card>

			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	  image: {
			flex: 1,
			aspectRatio: 1.5,
			resizeMode: 'contain',
		},
		input: {
			width: 250,
			margin: 5,
			backgroundColor: '#FFFFFF',
			borderColor: '#d7ff8c',
			borderWidth: 2,
		},
		container: {
			color: '#91b43d',
			backgroundColor: '#91b43d',
			flex: 1,
		},
	}

);
