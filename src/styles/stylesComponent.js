import { StyleSheet, Dimensions } from 'react-native';
import AuthStackComponent from '../components/AuthStackComponent';



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
  },
  buttonMargin: {
    marginBottom: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#91b43d',
    width: 100,
    height:30,
    margin:15,
    margin:10,
    paddingTop:5
  },
  buttonLayout:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center', 
  },
  itemsList: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	itemtext: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 10
	},
	itemCard: {
		marginTop:10,
		marginRight:10,
		marginLeft:10,
		backgroundColor :'#f9f4eb'
	}
});
