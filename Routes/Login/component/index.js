import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Linking,
  ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Dimensions,
  Image, TouchableHighlight, Picker, List, FlatList, ListItem} from 'react-native';
import { Button, Icon, Divider, SearchBar, Slider } from 'react-native-elements'
import Constants from 'expo-constants';

// COMPONENTS
import { CustomPicker } from 'react-native-custom-picker'
import Modal from "react-native-modal";
import { Actions } from 'react-native-router-flux';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import Emoji from 'react-native-emoji';

// AsyncStorage
import { _getItem, _setItem } from '../../../helpers/AsyncStorage'

// I18N
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import trads from '../../../Trads';
i18n.fallbacks = true;
i18n.translations = trads;
// i18n.locale = Localization.locale;

//IMPORTED COMPONENTS
// import ImageReturnPreviousPage from '../../../Components/ImageReturnPreviousPage/component'
import HeaderBar from '../../../Components/HeaderBar/component'
import GameListSearchBar from '../../../Components/GameListSearchBar/component'



// ASSETS
const pokerTableBackground = require('../../../assets/pokerTableBackground.png');
const usn = require('../../../assets/usn.png');

// STYLES
import { styles, buttons } from '../styles/styles.js'

const options = [
  {
    color: '#2660A4',
    label: 'English',
    value: 'en',
    flag: ':uk:'
  },
  {
    color: '#FF6B35',
    label: 'Français',
    value: 'fr',
    flag: ':fr:'
  },
  {
    color: '#FFBC42',
    label: '中文',
    value: 'cn',
    flag: ':cn:'
  },
];

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Anonymous',
      gamename: '',
      language: '',
      emoticon: "euro",
      players: 1,


      filePath: {},
      image: null,
      isModalVisible: false,
      maxValSlider: 5,
      minValSlider: 1,
      emojiList: ["euro", "pretzel", "avocado", "bomb", "soccer", "duck"],
      gameList: [
        {
          title: 'game1',
          players: 4
        },
        {
          title: 'game2',
          players: 4
        },
        {
          title: 'game3',
          players: 4
        },
        {
          title: 'game4',
          players: 4
        },
      ],
    }
  }


  async componentWillMount(){
    try {
        const value = await _getItem('GAMESETTINGS');
        if (value !== null) {
          let prsdValue = JSON.parse(value);
          this.setState({
            username: prsdValue.username,
            emoticon: prsdValue.emoticon
          })
        }
      } catch (error) {
        console.log(error);
      }
    await this.setState({language: i18n.locale});
    let lang = options.filter(x => x.value === i18n.locale.substring(0,2));
    await this.setState({languageObj: lang[0]});
  }

  goToGameBoard = async () => {
    try {
      await _setItem('GAMESETTINGS', JSON.stringify({
        username: this.state.username,
        gamename: this.state.gamename,
        language: this.state.language,
        emoticon: this.state.emoticon,
        players: this.state.players,
      }));
      await this.setState({isModalVisible: false});
      Actions.gameboard();
    } catch (error) {
      // Error saving data
      console.log(error);
    }

  }

  goToMenuChatroom = async () => {
    try {
      if(this.state.username== ''||this.state.username== 'Anonymous'){
      await AsyncStorage.setItem('USERNAME', 'Anonymous');}
      else{
      await AsyncStorage.setItem('USERNAME', this.state.username);}
      Actions.menuChatroom();
    } catch (error) {
      // Error saving data
      console.log(error);
    }

  }
  // getPermissionAsync = async () => {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //   }
  // }

  defaultLanguage = () => {
    let lang = '';
    lang = options.filter(x => x.value === this.state.language.substring(0,2));
    return lang;
  }
  setLanguage = (language) => {
    i18n.locale = language.value;
    this.setState({language: language.value});
  }
  setEmoji = async (emoji) => {
    await this.setState({emoticon: emoji});
  }

  renderField = (settings) => {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.elementLangPicker}>
        <View>
          {!selectedItem && <Text style={[styles.text, { color: '#EEE' }]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>
              <Text style={[styles.text, { color: '#EEE' }]}>
                {getLabel(selectedItem)}
              </Text>
              <View style={{ color: '#FFF', position: 'absolute', right: 5}}>
                <Icon name='caret-down' type='font-awesome' color='#EEE' />
              </View>
            </View>
          )}
        </View>
      </View>
    )
  }

  renderOption = (settings) => {
    const { item, getLabel, selectedItem } = settings
    return (
      <View style={styles.optionContainer}>
        <View style={styles.innerContainer}>
          <Emoji name={settings.item.flag} style={{fontSize: 20, marginRight: 15}}/>
          <Text style={{ alignSelf: 'flex-start' }}>{getLabel(item)}</Text>
        </View>
      </View>
    )
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    let { image } = this.state;
    return (

      <ImageBackground style={styles.screenView} source={pokerTableBackground} blurRadius={0}>
        <HeaderBar goBack={false} title={i18n.t('navbar.title')} settings={false}/>

        <View style={styles.containerSettings}>
          <Text style={styles.elementSubTitle}>{i18n.t('login.settingsTitle').toUpperCase()}</Text>

          <View style={styles.containerLanguages}>
            <CustomPicker
              value={this.state.languageObj}
              options={options}
              getLabel={item => item.label}
              fieldTemplate={this.renderField}
              optionTemplate={this.renderOption}
              headerTemplate={this.renderHeader}
              onValueChange={(itemValue, itemIndex) => {this.setLanguage(itemValue)}}
            />
          </View>

          <View style={styles.containerAvatar}>
            {this.state.emojiList.map((emoji, key) => (
              <View key={key} style={{fontSize: 50, textAlign: 'center',flex: 1,justifyContent: 'space-between',}}>
                <TouchableHighlight
                  style={this.state.emoticon==emoji?{backgroundColor: '#107BED', borderRadius: 4}:null}
                  onPress={()=>this.setEmoji(emoji)}
                  underlayColor="transparent"
                >
                  <Text style={{fontSize: 50, textAlign: 'center'}}><Emoji name={emoji}/></Text>
                </TouchableHighlight>
              </View>
            ))}
          </View>

          <View style={styles.containerUsername}>
            <Image
              source={usn}
              style={styles.usernameIcon}
            />
            <TextInput
              placeholder="Username"
              style={styles.usernameInput}
              placeholderTextColor="#999"
              maxLength={255}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="done"
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              underlineColorAndroid='rgba(0,0,0,0)'
            />
          </View>
        </View>

        <View style={styles.containerCurrentGame}>
          <Text style={styles.elementSubTitle}>{i18n.t('login.gameListTitle').toUpperCase()}</Text>

          <GameListSearchBar/>
          <View>
            <Button
              icon={
                <Icon containerStyle={{marginLeft: 5}} name='plus-square' type='font-awesome' color='#FFF' />
              }
              iconRight
              buttonStyle={{height: 50, marginTop: 15}}
              onPress={this.toggleModal}
              title={i18n.t('login.startNewGame')}
              titleStyle={{fontSize: 18, fontWeight: 'bold'}}
            />
            <Modal
              swipeDirection="down"
              onSwipeComplete={() => this.setState({ isModalVisible: false })}
              style={{ flex: 1, height: 'auto', padding: 10, backgroundColor: 'rgba(0,0,0,0)'}}
              isVisible={this.state.isModalVisible}
            >
              <View style={{ flex: 1, height: 10, backgroundColor: '#FFF', borderRadius: 5, padding: 15}}>
                <Text style={styles.containerTitleModal}>{i18n.t('login.newGame')}</Text>
                <View style={styles.containerGameModal}>
                  <Icon style={styles.gameIconModal} name='gamepad' type='font-awesome' color='#000' />
                  <TextInput
                    placeholder={i18n.t('login.newGame')}
                    style={styles.gameInputModal}
                    placeholderTextColor="#999"
                    maxLength={255}
                    autoCorrect={false}
                    autoCapitalize="none"
                    returnKeyType="done"
                    value={this.state.gamename}
                    onChangeText={(gamename) => this.setState({gamename})}
                    underlineColorAndroid='rgba(0,0,0,0)'
                  />
                </View>

                <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
                  <TouchableHighlight
                    style={{marginHorizontal: 5}}
                    onPress={()=>(this.state.players>this.state.minValSlider?this.setState({players: this.state.players - 1}):"")}
                    underlayColor="transparent"
                  >
                    <Icon size={40} name='minus-circle' type='font-awesome' color='#000' />
                  </TouchableHighlight>
                  <Slider
                    trackStyle={{backgroundColor: 'blue'}}
                    thumbStyle={{backgroundColor: '#107BED'}}
                    style={{flex: 1}}
                    value={this.state.players}
                    maximumValue={this.state.maxValSlider}
                    minimumValue={this.state.minValSlider}
                    step={1}
                    onValueChange={players => this.setState({ players })}
                  />
                  <TouchableHighlight
                    style={{marginHorizontal: 5}}
                    onPress={()=>(this.state.players<this.state.maxValSlider?this.setState({players: this.state.players + 1}):"")}
                    underlayColor="transparent"
                  >
                    <Icon size={40} name='plus-circle' type='font-awesome' color='#000' />
                  </TouchableHighlight>
                </View>
                <View style={{ justifyContent: 'center', flexDirection: 'row'}}>
                  <Text style={{fontSize: 24, fontWeight: 'bold', color: '#107BED'}}>{i18n.t('login.players')}: {this.state.players}</Text>
                </View>
                <View style={{marginTop: 50}}>
                  <Button title={i18n.t('login.startGame')} onPress={this.goToGameBoard} />
                </View>
                <View style={{marginTop: 15}}>
                  <Button type="outline" title={i18n.t('login.cancel')} onPress={this.toggleModal} />
                </View>
              </View>
            </Modal>
          </View>
        </View>

      </ImageBackground>
    );
  }
}
