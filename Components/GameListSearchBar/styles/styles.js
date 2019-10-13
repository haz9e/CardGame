import { StyleSheet, Dimensions } from 'react-native'
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;

const styles = StyleSheet.create({




  // CURRENT GAME ////////////////////////
  ////////////////////////////////////////
  // container:{
  //   maxHeight: 300
  // },
  containerCurrentGame:{
    width: '100%',
    // paddingBottom: 10
    // padding: 10,
    // paddingTop: 15,
    // flex: 1,
  },

  elementScrollCurrentGame:{
    // borderWidth: 0.25,
    // borderColor: '#FFF',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    minHeight: 100,
    maxHeight: 200,
    paddingBottom: 10,
  },

  elementGame:{
    padding: 15,
    // marginBottom: 3,
    // borderRadius: 5,
    backgroundColor: '#FFF',
    // borderBottomWidth: 0.5,
    borderBottomColor: '#EEE',
    flexDirection: 'row',
    alignItems: 'center'
  },


  ////////////////////////////////////////
  // viewStyle: {
  //   justifyContent: 'center',
  //   flex: 1,
  //   marginTop: 40,
  //   padding: 16,
  //   maxWidth: 300
  // },
  // textStyle: {
  //   padding: 10,
  // },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
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
