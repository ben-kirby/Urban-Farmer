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
  input: {
    width: 250,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderColor: '#d7ff8c',
    borderWidth: 2,
  },
  imageFit: {
    flex: 1,
    resizeMode: 'contain',
  },
  itemInput: {
    height: 50,
    padding: 4,
    margin: 5,
    borderRadius: 4,
    borderWidth:1,
    borderColor: 'black',
    backgroundColor: 'white',
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
    backgroundColor: '#91b43d',
  }
});
