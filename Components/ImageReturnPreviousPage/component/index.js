import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Dimensions, Image, Picker } from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Icon } from 'react-native-elements'
import Modal from "react-native-modal";

import { styles, returnBtn } from '../../../Styles/styles.js'

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


export default class ImageReturnPreviousPage extends Component {
  // https://c1ctech.com/react-native-image-picker-example/   EXAMPLE
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

        <View style={styles.containerHeadingView}>
          <Text style={styles.headingView}>{this.props.title}</Text>
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


        <Modal
          style={styles.modal}
          transparent={false}
          deviceWidth={300}
          visible={this.state.modalVisible}
        >
          <View>
            <View style={styles.container}>
              <View style={{flex: 1}}>
                <Picker
                  selectedValue={this.state.language}
                  style={{height: 50, color: '#000'}}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setLanguage(itemValue)}
                  }>
                  <Picker.Item label="English" value="en" />
                  <Picker.Item label="Français" value="fr" />
                </Picker>

                <Text style={{ flex: 1, paddingTop: 50, alignSelf: 'center', color: '#000' }}>
                  {i18n.t('foo')} {i18n.t('bar', { someValue: Date.now() })}
                </Text>

                <Text style={{ flex: 1, paddingTop: 50, alignSelf: 'center', color: '#000' }}>
                  ttsssssd
                </Text>
              </View>


            </View>

            <TouchableHighlight
              onPress={() => { this.setModalVisible(false) }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>



      </View>
    );
  }
}
