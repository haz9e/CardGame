import { StyleSheet, Dimensions } from 'react-native'
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;

const styles = StyleSheet.create({

  // CURRENT GAME ////////////////////////
  ////////////////////////////////////////
  screenCurrentGame:{
    width: '100%',
  },

  containerScrollCurrentGame:{
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    maxHeight: 200,
    // paddingBottom: 10,
  },

  elementGame:{
    padding: 15,
    backgroundColor: '#333',
    borderWidth: .5,
    borderBottomColor: '#555',
    flexDirection: 'row',
    alignItems: 'center'
  },

  elementGameSearchBar: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#333',
    color: '#999',
    borderWidth: 0
  },

  elementGameTitle: {
    color: '#EEE',
    fontSize: 18,
    flex: 1,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  elementGamePlayers: {
    color: '#EEE',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },

  containerCurrentGameChin:{
    height: 5,
    backgroundColor: '#333',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

  },

  ////////////////////////////////////////
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#555',
  },

});


export { styles }
