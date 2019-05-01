import { StyleSheet, Diemensions } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 65,
    alignItems: 'center',
    color: '#91b43d',
    backgroundColor: '#91b43d',
    flex: 1,
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: "center",
    color: "#656565"
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  footer: {
    alignSelf: "flex-end"
  },
  imageFit: {
    flex: 1,
    resizeMode: 'contain',
  },
  input: {
    height: 50,
    width: '75%',
    margin: 5,
    padding: 4,
    backgroundColor: '#FFFFFF',
    borderColor: '#d7ff8c',
    borderRadius: 4,
    borderWidth: 2,
  },
  errorInput: {
    height: 50,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderRadius: 4,
    borderWidth: 2,
  },
  itemInput: {
    height: 50,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderColor: '#d7ff8c',
    borderRadius: 4,
    borderWidth: 2,
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC',
  },
  scrollContainer: {
    backgroundColor: '#91b43d'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  buttonMargin: {
    marginBottom: 20,
  },
	accordionHeader: {
		backgroundColor: 'white',
		borderBottomColor: 'grey',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	accordionContent: {
		backgroundColor: '#eeeeee'
  },
  errorMessage: {
    color: 'red',
    textAlign: 'center',
  }
});
