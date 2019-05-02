import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, CardItem, Text, Body, Container} from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
import Loading from '../components/Loading'; //Will be used when 'dynamic' cards are implimented
import OfflineNotice from '../components/OfflineNotice';

import styles from '../styles/stylesComponent';

export default class HomeScreen extends Component {
	state = {
		email: '',
		user: '',
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
					email: 'Unknown@'
				});
			};
		});
	};

	chopEmailAtsymbol = (emailString) => {
		let found = emailString.search('@');
		let capitalizeFirst = emailString.charAt(0).toUpperCase();
		return (capitalizeFirst + emailString.slice(1,found));
	}

	render () {
		this.getEmail;
		return(
			<Container style={styles.scrollContainer}>
				<OfflineNotice/>
				<ScrollView>
				<Card>
					<CardItem header bordered>
						<Text>Welcome {this.chopEmailAtsymbol(this.state.email)} !</Text>
					</CardItem>
				</Card>
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
					<CardItem footer bordered>
						<Text></Text>
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
					<CardItem footer bordered>
						<Text></Text>
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
					<CardItem footer bordered>
						<Text></Text>
					</CardItem>
				</Card>
				</ScrollView>
			</Container>
		);
	}
}
