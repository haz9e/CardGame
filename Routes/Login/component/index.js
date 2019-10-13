import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Linking,
  ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Dimensions,
  Image, TouchableHighlight, Picker, List, FlatList, ListItem} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Divider, Icon, SearchBar, Slider } from 'react-native-elements'
// import { ListItem } from 'react-native-elements'
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient';
import { CustomPicker } from 'react-native-custom-picker'
import Modal from "react-native-modal";


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import Emoji from 'react-native-emoji';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
// const en = {
//   foo: 'Foo',
//   bar: 'Bar {{someValue}}',
// };
// const fr = {
//   foo: 'como telle fous',
//   bar: 'chatouiller {{someValue}}',
// };

import trads from '../../../Trads';

i18n.fallbacks = true;
i18n.translations = trads;
i18n.locale = Localization.locale;


//IMPORTED COMPONENTS
import SeparatorLine from '../../../Components/SeparatorLine/component'
import PackageResultForMessages from '../../../Components/PackageResultForMessages/component'
import ImageReturnPreviousPage from '../../../Components/ImageReturnPreviousPage/component'
import GameListSearchBar from '../../../Components/GameListSearchBar/component'

import {AsyncStorage} from 'react-native';
const backgroundImage = require('../../../assets/backgroundImage.jpg');
const brandLogo = require('../dist/logo.png');
const usn = require('../dist/usn.png');

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
    label: 'Chinese',
    value: 'cn',
    flag: ':cn:'
  },
]
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Anonymous',
      filePath: {},
      language: '',
      image: null,
      isModalVisible: false,
      selectedEmoji: "euro",
      players: 1,
      maxValSlider: 9,
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
        const value = await AsyncStorage.getItem('USERNAME');
        if (value !== null) {
          console.log(value);
          this.setState({
            username: value
          })
        }
        const image = await AsyncStorage.getItem('IMAGE');
        if (image !== null) {
          this.setState({
            image: image
          })
        }
      } catch (error) {
        // Error retrieving data
        console.log(error);
      }
    await this.setState({language: i18n.locale});

    let lang = options.filter(x => x.value === i18n.locale.substring(0,2));
    await this.setState({languageObj: lang[0]});

    // return lang;
  }
  componentDidMount() {
    this.getPermissionAsync();
  }


  goToGame = async () => {
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
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      await AsyncStorage.setItem('IMAGE', result.uri);
      // console.log(result.uri);
    }
  };
  removePicture = async () => {
    this.setState({ image: null });

    await AsyncStorage.removeItem('IMAGE', null);

  }

  setLanguage = (language) => {
    console.log('language',language);
    i18n.locale = language.value;
    this.setState({language: language.value});
  }

  setEmoji = (emoji) => {
    this.setState({selectedEmoji: emoji});
  }




  renderField = (settings) => {
    const { selectedItem, defaultText, getLabel, clear } = settings
    return (
      <View style={styles.elementLangPicker}>
        <View>
          {!selectedItem && <Text style={[styles.text, { color: '#000' }]}>{defaultText}</Text>}
          {selectedItem && (
            <View style={styles.innerContainer}>

              {/* <Text style={[styles.text, { color: selectedItem.color }]}> */}
              <Text style={[styles.text, { color: '#FFF' }]}>
                {getLabel(selectedItem)}
              </Text>

              <View style={{ color: '#FFF', position: 'absolute', right: 5}}>
                <Icon name='caret-down' type='font-awesome' color='#FFF' />
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

  defaultLanguage = () => {
    let lang = '';
    lang = options.filter(x => x.value === this.state.language.substring(0,2));

    return lang;
  }
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {

    let { image } = this.state;
    // console.log(i18n.locale);
    // console.log(this.state.language);
    // console.log(options[0]);
    console.log('\n\n');
    console.log('ROSTAVI',options[1]);
    console.log('\n\n');
    console.log('ZOOKLAV',this.state.languageObj);

    return (

      <ImageBackground style={styles.screenWrap} source={backgroundImage} blurRadius={1}>
        <ImageReturnPreviousPage goBack={false} title={i18n.t('navbar.title')} settings={true}/>


        <View style={styles.containerSettings}>
          <Text style={styles.elementSubTitle}>{i18n.t('login.settingsTitle')}</Text>

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
                  style={this.state.selectedEmoji==emoji?{backgroundColor: '#FFF', borderRadius: 4}:null}
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
              placeholderTextColor="#ffffff"
              maxLength={255}
              autoCorrect={false}
              keyboardType="email-address"
              autoCapitalize="none"
              returnKeyType="done"
              value={this.state.username}
              onChangeText={(username) => this.setState({username})}
              underlineColorAndroid='rgba(0,0,0,0)'
            />
          </View>
        </View>



        <View style={styles.containerCurrentGame}>
          <Text style={styles.elementSubTitle}>{i18n.t('login.gameListTitle')}</Text>
          <GameListSearchBar/>
          <View>
            <Button
              icon={
                <Icon containerStyle={{marginLeft: 5}} name='plus-square' type='font-awesome' color='#FFF' />
              }
              iconRight

              buttonStyle={{height: 50, marginTop: 15}}
              onPress={this.toggleModal}
              title="START A NEW GAME"
              titleStyle={{fontSize: 18, fontWeight: 'bold'}}
            />
            <Modal
              swipeDirection="down"
              onSwipeComplete={() => this.setState({ isModalVisible: false })}
              style={{ flex: 1, height: 'auto', padding: 10, backgroundColor: 'rgba(0,0,0,0)'}}
              isVisible={this.state.isModalVisible}
            >
              <View style={{ flex: 1, height: 10, backgroundColor: '#FFF', borderRadius: 5, padding: 15}}>
                <Text style={styles.containerTitleModal}>New game</Text>

                <View style={styles.containerGameModal}>
                  <Icon style={styles.gameIconModal} name='gamepad' type='font-awesome' color='#000' />

                  <TextInput
                    placeholder="Game name"
                    style={styles.gameInputModal}
                    placeholderTextColor="#ffffff"
                    maxLength={255}
                    autoCorrect={false}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="done"
                    value={this.state.username}
                    onChangeText={(username) => this.setState({username})}
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
                  <Text style={{fontSize: 24, fontWeight: 'bold', color: '#107BED'}}>Players: {this.state.players}</Text>
                </View>






                {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
                <Button title="Start game" onPress={this.goToMenuChatroom} />

              </View>
            </Modal>
          </View>
        </View>

      </ImageBackground>
    );
  }
}
