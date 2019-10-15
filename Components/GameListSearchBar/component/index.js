import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import { Icon, SearchBar } from 'react-native-elements'
import Modal from "react-native-modal";

import { styles } from '../styles/styles.js'

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import trads from '../../../Trads';
i18n.fallbacks = true;
i18n.translations = trads;
i18n.locale = Localization.locale;

export default class GameListSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: ''
    };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://api.myjson.com/bins/15yvwq')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function(item) {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.screenCurrentGame}>
        <SearchBar

          placeholder={i18n.t('gameList.typeHere')}
          containerStyle={styles.elementGameSearchBar}
          inputContainerStyle={{backgroundColor: '#555'}}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          autoCorrect={false}
        />
        <View>
          <ScrollView style={styles.containerScrollCurrentGame}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => (
                <View style={styles.elementGame}>
                  <Text style={styles.elementGameTitle}>{item.title}</Text>
                  <Text style={styles.elementGamePlayers}>{item.players} {i18n.t('gameList.players')}</Text>
                  <Icon name='chevron-circle-right' type='font-awesome' color='#DDD'/>
                </View>
              )}
              enableEmptySections={true}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>
        <View style={styles.containerCurrentGameChin}>

        </View>
      </View>
    );
  }
}
