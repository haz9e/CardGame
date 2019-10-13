import { StyleSheet, Dimensions } from 'react-native'

// const d = Dimensions.get("window")
const window = Dimensions.get('window');
const MARGIN_GAP = 0.05;


const styles = StyleSheet.create({

container_wrap:{
  position: 'relative',
  // alignItems: 'flex-end',

},

container_sender:{
  marginRight: 15,
  position: 'relative',
  alignItems: 'flex-end',
  borderRadius: 5,
  marginBottom: 30,

},
sender:{
  maxWidth: 250,
  minWidth: 50,
  backgroundColor: 'rgba(16,123,237,1)',
  borderRadius: 5,
  padding: 10,
},
message_s:{
  fontSize: 16,
  color: "#FFF"
},
date_s:{
  fontSize: 7,
  color: '#FFF',
  width: '100%',
  textAlign: 'right',
},
firstName_s:{
  fontSize: 16,
  fontWeight: 'bold',
  color: '#FFF',
  marginRight: 5,
},

profilePicture_s:{
  width: 35,
  height: 35,
  borderRadius: 5,
  marginLeft: 5,
},





container_receiver:{
  marginLeft: 15,
  borderRadius: 5,
  position: 'relative',
  alignItems: 'flex-start',
  marginBottom: 30,
},
receiver:{
  maxWidth: 250,
  minWidth: 50,
  backgroundColor: '#FDFDFD',
  borderRadius: 5,
  padding: 10,
},
message_r:{
  fontSize: 16,
  color: "#000"
},
date_r:{
  fontSize: 7,
  color: '#000',
  width: '100%',
  textAlign: 'left',
},
firstName_r:{
  fontSize: 16,
  fontWeight: 'bold',
  color: '#000',
  marginRight: 5,
},

profilePicture_r:{
  width: 35,
  height: 35,
  borderRadius: 5,
  marginRight: 5,

},


  firstNameAndScoreView:{
    flexDirection: 'row',
  },
  firstName:{
    fontSize: 16,
    fontWeight: 'bold',
    // color: '#000',
    marginRight: 5,
  },

  separator: {
    borderTopWidth: 0.5,
    borderColor: '#fff',
    width: '100%',
    height: 1,
  },
});


const buttons = StyleSheet.create({
  buttonView:{
    width: '100%',
  },
  start:{
    width: '100%',
  }
});


export { styles, buttons }
