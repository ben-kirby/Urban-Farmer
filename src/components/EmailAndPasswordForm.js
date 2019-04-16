import React, { Component } from 'react';
import {
	View,
	TextInput,
	Button,
	StyleSheet
} from 'react-native';

export default class EmailAndPassword extends Component {
	render() {
		return(
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({email: text})}
					placeholder="E-Mail"
				/>
				<TextInput
					style={styles.input}
					onChangeText={(text) => this.setState({password:text})}
					secureTextEntry={true}
					placeholder="Password"
				/>
				<Button
					onPress={this.handleSubmit}
					title="Submit"
					color="#841584"
				/>
				<Text>{this.state.uuid}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		width: 250,
		margin: 5,
		border: '1px solid black'
	},
});