import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Content, Accordion, Container } from 'native-base';

export default class TransactionDetail extends Component {
	state = {
		dataArray: []
	}
	componentDidMount() {
		
		if (this.state.dataArray.length == 0) {
			this.formatTransactionData();
		}
	}

	formatTransactionData = () => {
		let formattedDataArray = [];
		for (let i = 0; i < this.props.transactionData.length; i++) {
			this.formatDate(this.props.transactionData[i].timestamp)
			
			let formattedDataElement = {
				title: time,
				content: "Test Content"
			}
			formattedDataArray.push(formattedDataElement);
		}
		this.setState({
			dataArray: formattedDataArray
		});
		
	}

	formatDate = (timestamp) => {
		let date = new Date(timestamp);
		let month = date.getMonth();
		let day = date.getDate()
		let time = date.toString()
		console.log(time);
		
	}


	render() {
		return(
			<Container>
				<Text>Details Loading</Text>
				<Content padder>
					<Accordion 
						dataArray={this.state.dataArray}
					/>
				</Content>
			</Container>
		);
	}
}