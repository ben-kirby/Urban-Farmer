import Firebase from 'firebase';

const { firebaseConfig } = constants;

Firebase.initializeApp(firebaseConfig);

export function getAllRecords() {
	return function(dispatch) {};
}