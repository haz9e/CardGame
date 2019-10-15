import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Image, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import Modal from "react-native-modal";

import { styles } from '../styles/styles.js'

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import trads from '../../../Trads';
i18n.fallbacks = true;
i18n.translations = trads;
i18n.locale = Localization.locale;
// {i18n.t('gameList.typeHere')}

export default class HeaderBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      modalVisible: false,
      language: '',
    }
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
  setLanguage = (language) => {
    i18n.locale = language;
    this.setState({language: language});
  }
  render() {
    return (
      <View style={styles.navBar}>
        <View style={styles.containerReturnView}>
          {this.props.goBack?
            <TouchableHighlight
              style={styles.placeholderReturn}
              underlayColor="transparent"
              onPress={() => this.goToLogin()}
            >
              <Icon name='arrow-left' type='font-awesome' color='#FFF' />
            </TouchableHighlight>
            :
            null
          }
        </View>

        <View style={styles.containerHeading}>
          <Text style={styles.elementHeading}>{this.props.title.toUpperCase()}</Text>
        </View>

        <View style={styles.containerSettingsView}>
          {this.props.settings?
            <TouchableHighlight
              style={styles.placeholderSettings}
              underlayColor="transparent"
              onPress={() => this.setModalVisible(true)}
            >
              <Icon name='ellipsis-v' type='font-awesome' color='#FFF' />
            </TouchableHighlight>
            :
            null
          }
        </View>
      </View>
    );
  }
}
