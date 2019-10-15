import {StyleSheet, Dimensions} from 'react-native'

// const d = Dimensions.get("window")
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;

const styles = StyleSheet.create({

  screenView: {
    flex: 1,
  },

  container: {
    borderWidth: 1,
    borderColor: '#F00',
    paddingTop: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  elementSubTitle: {
    width: '100%',
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
    color: '#AAA',
    marginBottom: 3
  },

  // SETTINGS
  ////////////////////////////////////////
  containerSettings: {
    width: '100%',
    padding: 10,
    paddingTop: 15,
  },
  containerLanguages: {
    backgroundColor: '#333',
    borderWidth: 0.5,
    borderColor: '#555',
    borderRadius: 5,
    marginBottom: 15
  },
  containerAvatar: {
    backgroundColor: '#333',
    borderWidth: 0.5,
    borderColor: '#555',
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: 'row'
  },

  containerUsername: {
    backgroundColor: '#333',
    borderWidth: 0.5,
    borderColor: '#555',
    borderRadius: 5,
    marginBottom: 15,
    alignItems: 'center',
    flexDirection: 'row',
    height: 50
  },

  usernameInput: {
    color: '#EEE',
    width: '80%',
    height: '80%',
    fontWeight: "700",
    paddingHorizontal: 20
  },
  usernameIcon: {
    marginLeft: 10,
    width: 30,
    height: 30
  },

  elementLangPicker: {
    borderRadius: 5,
    padding: 15
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  text: {
    fontSize: 18
  },
  headerFooterContainer: {
    padding: 10,
    alignItems: 'center'
  },
  optionContainer: {
    padding: 10,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    borderRadius: 5
  },

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  // CURRENT GAME
  ////////////////////////////////////////
  containerCurrentGame: {
    width: '100%',
    padding: 10,
    // paddingTop: 15,
    flex: 1
  },

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

  // MODAL GAME
  ////////////////////////////////////////

  containerTitleModal: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center',
    marginBottom: 15
  },
  containerGameModal: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.25,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 25,
    height: 50,
    paddingLeft: 10
  },

  gameInputModal: {
    color: '#000',
    width: '80%',
    height: '80%',
    fontWeight: "700",
    paddingHorizontal: 20
  },
  gameIconModal: {
    fontSize: 30,
    marginLeft: 40,
    width: 30,
    height: 30
  },

  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////
  ////////////////////////////////////////

});

const buttons = StyleSheet.create({
  container_start: {
    width: '100%',
    height: 50
  },
  start: {
    width: '100%',
    height: 50
  }
});

export {
  styles,
  buttons
}
