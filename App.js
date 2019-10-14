import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Login from './Routes/Login/component/';
import MenuChatroom from './Routes/MenuChatroom/component/';
import GameBoard from './Routes/GameBoard/component/';
import {AsyncStorage} from 'react-native';
// const I18n = require('react-native-i18n').default
// import I18n from 'react-native-i18n';



const window = Dimensions.get('window');
type Props = {};
export default class App extends Component {


  render() {

    // console.log('\n\n\n');
    // console.log('PROPS',this.props);
    // console.log('\n\n\n');

    return (
      <Router>
        <Stack key="root">
          <Scene key="gameboard" component={GameBoard} hideNavBar={true} />

          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="menuChatroom" component={MenuChatroom} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
