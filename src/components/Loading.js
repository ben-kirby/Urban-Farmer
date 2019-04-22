import React, { Component } from 'react';
import { Dimensions, Animated, View, Text, Image, StyleSheet } from 'react-native';
import Carrot from '../img/Carrot.png';

export default class Loading extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image
					resizeMode='contain'
					source={Carrot}
					style={styles.image}
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		height: 140,
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined
	}
});