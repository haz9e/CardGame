import { StyleSheet, Dimensions } from 'react-native'

// const d = Dimensions.get("window")
const window = Dimensions.get('window');
const MARGIN_GAP = 0.05;


const styles = StyleSheet.create({
  separatorView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: window.height*MARGIN_GAP,
  },
  separator: {
    borderTopWidth: 0.5,
    borderColor: '#aaa',
    width: '100%',
    height: 1,
  },
});

export { styles }
