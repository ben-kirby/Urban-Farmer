import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Content, Accordion, Container } from 'native-base';
import moment from 'moment';
import styles from '../styles/stylesComponent';

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
			let formattedContent = this.formatContent({
				item: this.props.transactionData[i].item,
				unitPrice: parseInt(this.props.transactionData[i].unitPrice),
				qtySold: parseInt(this.props.transactionData[i].qtySold)
			});
			let formattedDataElement = {
				title: this.formatDate(this.props.transactionData[i].timestamp),
				content: formattedContent
			}
			formattedDataArray.push(formattedDataElement);
		}
		this.setState({
			dataArray: formattedDataArray
		});
		
	}

	formatDate = (timestamp) => {		
		return moment(timestamp).format('M/D/YY, h:mm a');
	}

	formatContent = (content) => {		
		return content.qtySold + ' ' + content.item + '\n' + '$' + (content.unitPrice).toFixed(2) + ' each\n' + '$' + (content.unitPrice * content.qtySold).toFixed(2) + ' total';		
	}

	render() {
		return(
			//<Container style={styles.scrollContainer}>
				<Content padder>
					<Accordion 
						dataArray={this.state.dataArray}
						headerStyle={styles.accordionHeader}
						contentStyle={styles.accordionContent}
					/>
				</Content>
			//</Container>
		);
	}
}