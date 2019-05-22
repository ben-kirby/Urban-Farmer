import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles/stylesComponent';

export default function Username(){
	return(
		<TextInput
			underlineColorAndroid='transparent'
			style={styles.input}
			onChangeText={this.props.handleEmail}
			placeholder='E-mail'
			autoCapitalize='none'
			value={this.state.text}
			keyboardType='email-address'
			maxLength={255}
			textContentType='username'
		/>
	);
}