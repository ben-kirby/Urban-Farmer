import React, { Component } from 'react';
import { ScrollView, Button, View, Dimensions, Image } from 'react-native';
import { Card, CardItem, Text, Body, Container} from "native-base";
import { navigationOptions } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading';
import OfflineNotice from '../components/OfflineNotice';

import styles from '../styles/stylesComponent';

export default class HomeScreen extends Component {
	state = {
		email: ''
	}

	componentDidMount() {
		this.getEmail();
	}

	getEmail = async () => {
		await AsyncStorage.getItem('email').then(response => {
			if (response !== null) {
				this.setState({
					email: response
				});
			} else {
				this.setState({
					email: 'Unknown'
				});
			};
		});
	};

	render () {
		this.getEmail;
		return(
			<Container style={styles.scrollContainer}>
				<OfflineNotice/>
				<Text>{JSON.stringify(this.state)}</Text>
				<Card>
					<CardItem header bordered>
						<Text>Sales vs. Time, for {'April 2019'}</Text>
					</CardItem>
					<CardItem bordered>
						<Image
							style={styles.imageFit}
							source={require('../img/salesGraph.gif')}
							/>
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
			</Container>
		);
	}
}
