import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Image, Picker, Animated, PanResponder } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import Modal from "react-native-modal";

import { styles, returnBtn } from '../styles/styles.js'

import VectorCard from '../../VectorCard/component'
import Draggable from '../../Draggable';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
const en = {
  foo: 'Foo',
  bar: 'Bar {{someValue}}',
};
const fr = {
  foo: 'como telle fous',
  bar: 'chatouiller {{someValue}}',
};
i18n.fallbacks = true;
i18n.translations = { fr, en };
i18n.locale = Localization.locale;


export default class PokerHand extends Component {
  // https://c1ctech.com/react-native-image-picker-example/   EXAMPLE
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      language: '',
    }

    this.panelY = 0;
    this.scrollY = 0;
    this.mainPosition = new Animated.ValueXY();
    this.mainPanResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null, { dx: this.mainPosition.x, dy: this.mainPosition.y }
        ]),
        // onPanResponderGrant: (event, gesture) => {
        //     this.mainPosition.setOffset({
        //         x: this.mainPosition.x._value,
        //         y: this.mainPosition.y._value
        //     });
        //     this.mainPosition.setValue({ x: 0, y: 0 });
        // },
        onPanResponderRelease: (e, gesture) => {
            console.log(gesture);
            // if (gesture.dy > 290) {
            //     this.getCardFromDeckToHand();
            // }
            // if (gesture.dx > 120 && gesture.dx < 175 && gesture.dy > -370 && gesture.dy < -270){
            //   alert('sur le plateau !!!!!!!');
            //   this.props.dropCardFromDeckOnBoard();
            //
            // }
            this.mainPosition.setValue({ x: 0, y: 0 });
        }
    });
  }

  componentWillMount(){
    this.setState({modalVisible: false});
  }
  goToLogin(){
    Actions.login()
  }
  someFunction(){
    Alert.alert(
      'OK',
    )
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  setLanguage = (language) => {
    i18n.locale = language;
    this.setState({language: language});
    console.log(i18n.locale);
  }
  render() {

    console.log('this.props.cardsHand',this.props.cardsHand);
    return (
      <View style={styles.screenPokerHand}>

        {this.props.cardsHand!=undefined?

          Object.keys(this.props.cardsHand).map((key) => (

            <Draggable
              key={key}
              dropCardFromDeckToBoard={this.props.dropCardFromDeckToBoard}
              suit={this.props.cardsHand[key].Suit}
              value={this.props.cardsHand[key].Value}
            />

          ))
        :<Text>Empty</Text>}



      </View>
    );
  }
}
