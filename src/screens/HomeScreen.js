import React, { Component } from 'react';
import { ScrollView, Button, Image } from 'react-native';
import { Card, CardItem, Text, Body } from "native-base";
import { navigationOptions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

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
			<ScrollView>
				<Button
					title="*Add Item"
					onPress={() => this.props.navigation.navigate('AddItem')}
				/>
				<Button
					title="*Item List"
					color="green"
					onPress={() =>  this.props.navigation.navigate('InventoryList')}
				/>
				<Button
					title="*Sign In"
					onPress={() => this.props.navigation.navigate('SignIn')}
				/>
				<Button
					title="*Create User"
					onPress={() => this.props.navigation.navigate('CreateUser')}
				/>
				<Button
					title='*Sales Detail Page'
					onPress={() => this.props.navigation.navigate('SalesDetail')}
				/>
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
                <Text>
                  {'Put react-native-dynamic-graph here.'}
                </Text>
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
