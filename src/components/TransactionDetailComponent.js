import React, { Component } from 'react';
import { View } from 'react-native';
import { Conatainer, Header, Content, Accordion, Container } from 'native-base';

export default class TransactionDetail extends Component {
	state = {
		dataArray: []
	}
	componentDidMount() {
		if (this.state.dataArray.length > 0) {
			this.formatTransactionData();
		}
	}

	formatTransactionData = () => {
		let formattedDataArray = [];
		for (let i = 0; i < this.props.transactionData.length; i++) {
			let time = Date.toString(this.props.transactionData[i].timestamp)
			let formattedDataElement = {
				title: time,
				content: "Test Content"
			}
			formattedDataArray.push(formattedDataElement)
		}
		this.setState({
			dataArray: formattedDataArray
		});
	}


	render() {
		return(
			<Container>
				<Header/>
				<Content padder>
					<Accordion 
						dataArray={this.state.dataArray}
						expanded={0}
					/>
				</Content>
			</Container>
		);
	}
}