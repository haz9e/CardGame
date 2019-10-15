import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import Modal from "react-native-modal";

import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Dimensions, Picker, Text, Image, ActivityIndicator } from 'react-native';

import { styles } from '../styles/styles.js'

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import trads from '../../../Trads';
i18n.fallbacks = true;
i18n.translations = trads;
i18n.locale = Localization.locale;
// {i18n.t('gameList.typeHere')}

const spades = require('../../../assets/spades.png');
const clovers = require('../../../assets/clover.png');
const hearts = require('../../../assets/heart.png');
const diamonds = require('../../../assets/diamond.png');

export default class VectorCard extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  componentWillMount(){
    this.setState({modalVisible: false});
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }
  setLanguage = (language) => {
    i18n.locale = language;
    this.setState({language: language});
  }
  setImage = (image) => {
    switch (image) {
      case 'spades':
      return require('../../../assets/spades.png');
        break;
      case 'clubs':
      return require('../../../assets/clover.png');
        break;
      case 'hearts':
      return require('../../../assets/heart.png');
        break;
      case 'diamonds':
      return require('../../../assets/diamond.png');
        break;
      default:
    }
  }
  render() {
    if(this.props.suit==undefined){
      <View>
        <ActivityIndicator/>
      </View>
    }

    return (
      <View style={styles.containerCard}>
        <View style={styles.elementCard}>
          <View style={styles.elementCardBody}>
            <Text style={styles.elementValue}>{this.props.value}</Text>
            <Image source={this.setImage(this.props.suit)} style={styles.elementSuit}></Image>
          </View>
        </View>
      </View>
    );
  }
}
