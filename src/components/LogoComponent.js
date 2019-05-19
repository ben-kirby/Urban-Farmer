import React from 'react';
import { Image } from 'react-native';
import Carrot from '../img/Carrot.png';
import styles from '../styles/stylesComponent';

export default function LogoComponent() {
	return(
		<Image
			style={styles.authLogoImage}
			source={Carrot}
		/>
	);
}