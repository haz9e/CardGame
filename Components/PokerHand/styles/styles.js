import { StyleSheet, Dimensions } from 'react-native'
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;

const styles = StyleSheet.create({
  topBar:{
    width: window.width,
    backgroundColor: '#eee',
    borderBottomWidth: 0.5,
    borderColor: '#999',
    // marginBottom: 15,
    // borderWidth: 3,
    // borderColor: '#3f0'
    // borderBottomLeftRadius: 5,
    // borderBottomRightRadius: 5,
  },

  screenPokerHand:{
    flexDirection: 'row',
    height: 100,
    padding: 5,
  },


});

const returnBtn = StyleSheet.create({
  containerReturn: {
    zIndex: 1,
    padding: 10,
    paddingTop: 30,
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',

  },
  placeholderReturn: {
    width: 30,
    height: 30,
    borderRadius: 100,

  },
  imageReturn: {
    width: "100%",
    height: "100%",
    zIndex: 9
  }
});

export { styles, returnBtn }
