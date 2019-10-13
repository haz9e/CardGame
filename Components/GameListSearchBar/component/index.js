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

import { styles, returnBtn } from '../styles/styles.js'

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


export default class GameListSearchBar extends Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, text: '' };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
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
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      text: text,
    });
  }
  // ListViewItemSeparator = () => {
  //   //Item sparator view
  //   return (
  //     <View
  //       style={{
  //         height: 0.3,
  //         width: '90%',
  //         backgroundColor: '#080808',
  //       }}
  //     />
  //   );
  // };
  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.containerCurrentGame}>

        <SearchBar
          placeholder="Type Here..."
          lightTheme
          containerStyle={{borderTopLeftRadius: 5, borderTopRightRadius: 5, backgroundColor: '#FFF'}}
          inputContainerStyle={{backgroundColor: '#EEE'}}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}

          autoCorrect={false}
        />
        <View>
          <ScrollView style={styles.elementScrollCurrentGame}>
            <FlatList
              data={this.state.dataSource}
              // ItemSeparatorComponent={this.ListViewItemSeparator}
              renderItem={({ item }) => (
                <View style={styles.elementGame}>
                  <Text style={{fontSize: 14, flex: 1, textAlign: 'center'}}>{item.title}</Text>
                  <Icon name='chevron-circle-right' type='font-awesome' color='#DDD'/>
                </View>
              )}
              enableEmptySections={true}
              style={{borderRadius: 5, paddingBottom: 10}}
              keyExtractor={(item, index) => index.toString()}
            />
          </ScrollView>
        </View>


      </View>
    );
  }
}
