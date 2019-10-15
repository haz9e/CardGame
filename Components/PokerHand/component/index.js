import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Image, ImageBackground, Picker, Animated, PanResponder } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import Modal from "react-native-modal";

import { styles } from '../styles/styles.js'

import VectorCard from '../../VectorCard/component'
import Draggable from '../../Draggable';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import trads from '../../../Trads';
i18n.fallbacks = true;
i18n.translations = trads;
i18n.locale = Localization.locale;
// {i18n.t('gameList.typeHere')}

const deckBoard = require('../../../assets/deckBoard.png');


export default class PokerHand extends Component {
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
        onPanResponderRelease: (e, gesture) => {
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
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  render() {
    return (

        <ImageBackground style={styles.screenPokerHand} source={deckBoard} blurRadius={0}>

        {this.props.cardsHand!=undefined?
          Object.keys(this.props.cardsHand).map((key) => (
            <Draggable
              key={key}
              dropCardFromDeckToBoard={this.props.dropCardFromDeckToBoard}
              suit={this.props.cardsHand[key].Suit}
              value={this.props.cardsHand[key].Value}
            />
          ))
        :<Text>{i18n.t('pokerHand.empty')}</Text>}
      </ImageBackground>

    );
  }
}
