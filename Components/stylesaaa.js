import { StyleSheet, Dimensions } from 'react-native'

// const d = Dimensions.get("window")
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;


const styles = StyleSheet.create({
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




//INPUTS

  textTitleView:{
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle:{
    color: '#000',
    fontWeight: '300',
    fontSize: 24,
  },
  textInputView:{
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 0.25,
    borderColor: '#777777',
    borderRadius: 5,
    marginBottom: 25,
    height: 50,

  },
  textInputView:{
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 0.25,
    borderColor: '#777777',
    borderRadius: 5,
    marginBottom: 25,
    height: 50,

  },

  textInput: {
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

  separatorView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop: 30,         ////////////////dimension height
    marginTop: window.height*MARGIN_GAP,


    // borderWidth: 1,
    // borderColor: 'red',
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




  socialIconView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    // marginTop: 30,         ////////////////dimension height
    marginTop: window.height*MARGIN_GAP,
    // width: '100%',
  },
  socialIcon:{
    height: 45,
    width: 45,
  },



  separatorView2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    // marginVertical: 30,         ////////////////dimension height
    marginVertical: window.height*MARGIN_GAP,

    // borderWidth: 1,
    // borderColor: 'red',
  },
  separatorTextView2:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',


  },
  separatorText2: {
    color: '#fff',
    fontSize: 16,
  },
  separator2: {
    borderTopWidth: 0.5,
    borderColor: '#fff',
    width: '30%',
    height: 1,
  },
  // continuarConectadoText: {
  //   fontFamily: 'roboto-medium-500',
  //   letterSpacing: 0,
  //   color: '#ffffff',
  //   fontSize: 5 * 3,
  //   marginTop: 2 * 3,
  //   marginBottom: 8 * 3,
  //   marginLeft: 3 * 3
  // },

  forgotPasswordView:{
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  forgotPasswordText:{
    color: '#fff',
    fontSize: 16,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },



});



const buttons = StyleSheet.create({
  buttonView:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'

  },
  buttonContainer: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%'

  },
  signin: {
    backgroundColor: '#1E90FF',
    borderWidth: 0.25,
    borderColor: '#777777',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // width: '60%',
    // height: 40
    width: '100%'

  },
  traveler:{
    backgroundColor: '#F69D34',
    borderWidth: 0.25,
    borderColor: '#777777',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView2:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 30,         ////////////////dimension height
    marginVertical: window.height*MARGIN_GAP,

  },
  guide:{
    // backgroundColor: '#1E90FF',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { styles, buttons }



// COPIER:
// top: height*0.93,
//  marginLeft: width*0.18,









// TEXTFILED:
// position: absolute;
// width: 286px;
// height: 48px;
// left: 45px;
// top: 212px;
//
// background: rgba(194, 194, 194, 0.2);
// border: 0.25px solid #777777;
// box-sizing: border-box;
// border-radius: 5px;
//
//
//
// BUTTON AVC SHADOW:
// position: absolute;
// width: 123px;
// height: 48px;
// left: 208px;
// top: 351px;
//
// box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25);


// background: #1E90FF;
// border: 0.25px solid #777777;
// box-sizing: border-box;
// border-radius: 5px;







// LINE SEPARATOR:
// position: absolute;
// width: 95px;
// height: 0px;
// left: 236px;
// top: 443px;
//
// border: 0.5px solid #FFFFFF;
