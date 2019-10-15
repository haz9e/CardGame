import {StyleSheet, Dimensions} from 'react-native'

// const d = Dimensions.get("window")
const window = Dimensions.get('window');
const MARGIN_GAP = 0.025;

const styles = StyleSheet.create({

  screenView: {
    height: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandLogoCont: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: window.height * MARGIN_GAP,

    marginBottom: window.height * MARGIN_GAP,

    width: 300,
    height: 100
  },

  seatEmpty: {
    zIndex: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: '#FFF',
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute'
  },

  seatTaken: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: '#FFF',
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    position: 'absolute'
  },

  seatEmptyTextElement: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500'
  },

  seatTakenTextElement: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500'
  },

  cardContainer: {
    minHeight: 1000,
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  panel: {
    position: 'absolute',
    backgroundColor: '#bdbdbd',
    flex: 1,
    maxHeight: 200,
    height: 200,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center'
  },
  panelCard: {
    backgroundColor: '#fff',
    elevation: 2,
    height: 150,
    maxHeight: 150,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropCard: {
    backgroundColor: '#fff',
    height: 150,
    maxHeight: 150,
    elevation: 2,
    borderRadius: 10,
    position: 'absolute',
    left: 10,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerCard: {
    flex: 1,
    // position: 'absolute'
  },
  elementCard: {
    width: 40,
    height: 70,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    padding: 2
  },
  elementCardBody: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  elementSuit: {
    width: 15,
    height: 15
  },
  elementValue: {}
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
