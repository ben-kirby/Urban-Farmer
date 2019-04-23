import React, { Component } from 'react';
import { Animated, View, Image, StyleSheet, Easing } from 'react-native';
import Carrot from '../img/Carrot.png';



export default class Loading extends Component {
	constructor () {
		super();
		this.spinValue = new Animated.Value(0);
	}

	componentDidMount(){
		this.spin();
	}

	spin () {
		this.spinValue.setValue(0);
		Animated.timing(
			this.spinValue,
			{
				toValue: 1,
				duration: 4000,
				easing: Easing.linear
			}
		).start(() => this.spin());
	}

	render() {
		const spin = this.spinValue.interpolate({
			inputRange: [0, 1],
			outputRange: ['0deg', '360deg']
		});

		return(
			<View style={styles.container}>
				<Animated.Image
					resizeMode='contain'
					style={{
						flex: 1,
						transform: [{rotate: spin}],
						height: undefined,
						width: undefined
					}}
					source={Carrot}
				/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 140
	},
	image: {
		flex: 1,
		height: undefined,
		width: undefined
	},
});