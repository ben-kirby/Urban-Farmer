import React from 'react';
import { View, Image} from 'react-native';
import Carrot from '../img/Carrot.png';
import styles from '../styles/stylesComponent'

export default function LogoComponent() {
	return(
		<View style={styles.authLogoContainer}>
			<Image
				style={styles.authLogoImage}
				source={Carrot}
			/>
		</View>
	);
}