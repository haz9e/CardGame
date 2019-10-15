import { StyleSheet, Dimensions } from 'react-native'
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;

const styles = StyleSheet.create({
  topBar:{
    width: window.width,
    backgroundColor: '#eee',
    borderBottomWidth: 0.5,
    borderColor: '#999',
  },

  navBar:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 5,
  },

  containerReturnView: {
    justifyContent:'center',

    flex: 1,
  },
  placeholderReturn: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: 'center',

  },
  imageReturn: {
    width: "100%",
    height: "100%",
    zIndex: 9,
  },


  containerHeading:{
    minWidth: 300,
    flex: 1,
  },
  elementHeading:{
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },



  containerSettingsView:{
    // borderColor: '#3e8',
    // borderWidth: 1,
    justifyContent:'center',

    flex: 1,
    alignItems: 'flex-end',
  },
  placeholderSettings:{
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  settingsView:{

  },
});

// const returnBtn = StyleSheet.create({
//   containerReturn: {
//     zIndex: 1,
//     padding: 10,
//     paddingTop: 30,
//     // backgroundColor: 'rgba(255, 255, 255, 0.3)',
//
//   },
//   placeholderReturn: {
//     width: 30,
//     height: 30,
//     borderRadius: 100,
//
//   },
//   imageReturn: {
//     width: "100%",
//     height: "100%",
//     zIndex: 9
//   }
// });

export { styles }
