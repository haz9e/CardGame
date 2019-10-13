import { StyleSheet, Dimensions } from 'react-native'

// const d = Dimensions.get("window")
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;


const styles = StyleSheet.create({

  screenWrap:{
    // backgroundColor: '#000',

  },
  generalView:{
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogoCont:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandLogo:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: window.height*MARGIN_GAP,

    marginBottom: window.height*MARGIN_GAP,

    width: 300,
    height: 100,
  },

  containerUploadPictureView:{
    width: 200, height: 200,
    borderWidth: 0.25,
    borderColor: '#FFF',
    borderRadius: 5,
    marginBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  uploadPictureView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  textUploadPictureView:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  },
  ///////////////////////////////////////





  // HEADING VIEW
  textTitleView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },

  textSubTitle:{
    // justifyContent: 'left',
    // alignItems: 'left',
    color: '#FFF',
    fontWeight: '300',
    fontSize: 12,
  },

  textInputView:{
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.25,
    borderColor: '#FFF',
    borderRadius: 5,
    marginBottom: 25,
    height: 50,
  },
  textInput: {
    // borderWidth: 1,
    // borderColor: '#000',
    color: '#ffffff',
    width: '80%',
    height: '80%',
    fontWeight: "700",
    paddingHorizontal: 20,
  },
  textInputIcon:{
    marginLeft: 10,
    width: 30,
    height: 30,
  },







  navBar:{
    flexDirection: 'row',
    paddingTop: 40,
    paddingHorizontal: 5,
  },


  containerReturnView: {
    // borderColor: '#3e8',
    // borderWidth: 1,
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


  containerHeadingView:{
    // borderColor: '#3e8',
    // borderWidth: 1,
    flex: 1,
  },
  headingView:{
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


  //////////////////////////////



  //MESSAGES LIST VIEW
  containerMessagesView:{
    flex: 1,
    // backgroundColor: '#FFF',
    backgroundColor: 'rgba(255, 255, 255, 0)',

    paddingTop: 15,
  },

  ///////////////////////////////////////


  // TYPE MESSAGE FIELD DOCK
  containerDockView: {
    width: window.width,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    // padding: 10,
    paddingHorizontal: 10,
    paddingBottom: 10
    // backgroundColor: '#000',

  },


  dockView:{
    backgroundColor: '#FFF',
    height: 40,
    // height: '100%',
    borderRadius: 100,

    paddingHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopWidth: 0.5,
    // borderColor: '#aaa',
  },

  typeMessageInput: {
    // borderWidth: 1,
    // borderColor: '#000',
    // color: '#ffffff',
    width: '80%',
    height: '80%',
    fontWeight: "700",
    paddingHorizontal: 20,
  },

  containerSendMessageButton:{

    // borderWidth: 1,
    // borderColor: '#000',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center',

    paddingHorizontal: 20,

  },
  sendMessageButton:{
    zIndex: 3,
    height: '100%',

  },
  ///////////////////////////////////////









  separatorView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 30,         ////////////////dimension height
    marginTop: window.height*MARGIN_GAP,
  },
  separatorTextView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  separatorText: {
    color: '#fff',
    fontSize: 16,
  },
  separator: {
    borderTopWidth: 0.5,
    borderColor: '#fff',
    width: '30%',
    height: 1,
  },




  iconImg:{
    width: 30,
    height: 30,
  },

  iconText:{
    color: '#fff',
    fontWeight: '300',
    fontSize: 10,
  },




});



const buttons = StyleSheet.create({
  container_start:{
    width: '100%',
    height: 50,
  },
  start:{
    width: '100%',
    height: 50,
  }
});



export { styles, buttons }
