import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Linking,
  ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Dimensions,
  Image, TouchableHighlight, Picker, List, FlatList, ListItem, Animated, PanResponder} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Divider, Icon, SearchBar, Slider } from 'react-native-elements';



// COMPONENTS
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import { LinearGradient } from 'expo-linear-gradient';
import { CustomPicker } from 'react-native-custom-picker'
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import Emoji from 'react-native-emoji';
// import Draggable from '../../Draggable';

// AsyncStorage
import { _getItem, _setItem } from '../../../helpers/AsyncStorage'

// IMAGE PICKER + PERMISSIONS
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// I18N
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import trads from '../../../Trads';
i18n.fallbacks = true;
i18n.translations = trads;
i18n.locale = Localization.locale;

//IMPORTED COMPONENTS
import SeparatorLine from '../../../Components/SeparatorLine/component'
import PackageResultForMessages from '../../../Components/PackageResultForMessages/component'
import ImageReturnPreviousPage from '../../../Components/ImageReturnPreviousPage/component'
import GameListSearchBar from '../../../Components/GameListSearchBar/component'
import PokerHand from '../../../Components/PokerHand/component'

// ASSETS
const guide1 = require('../dist/guide1.jpg');
// const backgroundImage = require('../../../assets/backgroundImage.jpg');
// const pokerTable = require('../../../assets/pokerTable.jpg');
const pokerTableBackground = require('../../../assets/pokerTableBackground.png');
const pokerTableItem = require('../../../assets/pokerTableItem.png');
const deckGameCards = require('../../../assets/deckGameCards.png');


// STYLES
import { styles, buttons } from '../styles/styles.js'
const window = Dimensions.get('window');
const seatsList = [
  {
    container: 'containerSeatOne',
    label: 'Seat1',
    value: 'seatOne',
    style: {
      top: window.height*0.06,
      right: window.height*0.015,
    }
  },
  {
    container: 'containerSeatTwo',
    label: 'Seat2',
    value: 'seatTwo',
    style: {
      top: window.height*0.06,
      left: window.height*0.06,
    }
  },
  {
    container: 'containerSeatThree',
    label: 'Seat3',
    value: 'seatThree',
    style:{
      top: window.height*0.325,
      left: window.height*0.025,
    }
  },
  {
    container: 'containerSeatFour',
    label: 'Seat4',
    value: 'seatFour',
    style:{
      top: window.height*0.58,
      left: window.height*0.06,
    }
  },
  {
    container: 'containerSeatFive',
    label: 'Seat5',
    value: 'seatFive',
    style:{
      top: window.height*0.58,
      right: window.height*0.015,
    }
  },
]

  export default class GameBoard extends Component {
    constructor(props){
      super(props)
      this.navigate = this.props.navigation.navigate,
      this.state = {

        username: '',
        gamename: '',
        language: '',
        emoticon: '',
        players: 0,
        seat: null,

        cards: [],
        cardsInit: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
        suitsInit: ["diamonds", "hearts", "spades", "clubs"],
        deck: [],
        playersCards: [],
        cardsBoard: [],
        cardsHand: [],
        // username: 'Anonymous',
        // typing: '',
        // image: '',
        // messages: [],

        seatOne: null,
        seatTwo: null,
        seatThree: null,
        seatFour: null,
        seatFive: null,


        // showDraggable: true,
        // dropAreaValues: null,
        // pan: new Animated.ValueXY(),
        // opacity: new Animated.Value(1)
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
              if (gesture.dy > 290) {
                  this.getCardFromDeckToHand();
              }
              // if (gesture.dx < -50 && gesture.dx > -120 && gesture.dy > -40 && gesture.dy < 50){
              //   alert('sur le plateau !!!!!!!');
              //   this.dropCardFromDeckOnBoard();
              //
              // }
              this.mainPosition.setValue({ x: 0, y: 0 });
          }
      });
    }

    async componentWillMount(){
      this.generateDeck();
    }

    async componentDidMount(){
      try {
        const value = await _getItem('GAMESETTINGS');
        if (value !== null) {
          // console.log("GAMEBOARD VALUES",JSON.parse(value).username);
          let prsdValue = JSON.parse(value);
          await this.setState({
            username: prsdValue.username,
            gamename: prsdValue.gamename,
            emoticon: prsdValue.emoticon,
            players: prsdValue.players,
          })
        }

      } catch (error) {
        // Error retrieving data
        console.log('BIG ERROR !!!!!!!',error);
      }
    }

    getCardFromDeckToHand = async () => {
      // console.log('this.state.deck',this.state.deck);
      console.log('\n\n\n\n');
      // if(this.state.cardsHand.length<=6){
        let cards = this.state.cardsHand;
        cards.push(this.state.deck[this.state.deck.length-1]);
        await this.setState({
          cardsHand: cards
        })
        this.state.deck.pop();
      // }
      // console.log('this.state.deck',this.state.deck);
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

    dropCardFromDeckToBoard = async (a, b) => {
      console.log('ROROOROR', a);
      console.log('ROROOROR', b);


      newCardsBoard = this.state.cardsBoard;
      newCardsBoard.push({
        "Suit": a,
        "Value": b,
      });
      await this.setState({
        cardsBoard: newCardsBoard
      })
    }

    generateDeck = async () => {
      const { suitsInit, cardsInit } = this.state;

    	var deck = new Array();

    	for(var i = 0; i < suitsInit.length; i++)
    	{
    		for(var x = 0; x < cardsInit.length; x++)
    		{
    			var card = {Value: cardsInit[x], Suit: suitsInit[i]};
    			deck.push(card);
    		}
    	}

    	// return deck;
      await this.setState({deck: deck});
      await this.shuffleDeck();
    }

    shuffleDeck = () => {
      const { deck } = this.state;

    	// for 1000 turns
    	// switch the values of two random cards
    	for (var i = 0; i < 1000; i++)
    	{
    		var location1 = Math.floor((Math.random() * deck.length));
    		var location2 = Math.floor((Math.random() * deck.length));
    		var tmp = deck[location1];

    		deck[location1] = deck[location2];
    		deck[location2] = tmp;
    	}
      // console.log('deck',deck);

    	// renderDeck();
    }

    manageSeatAvailability = (seat) => {
      console.log(seat);
      const { username, emoticon } = this.state;

      if(this.state.seat){
        alert('You already sitting elsewhere');
      }else{
        if(!this.state[seat]){
          console.log('null');
          let userObj = {
            seat: seat,
            username: username,
            emoticon: emoticon
          }
          this.setState({
            [seat]: userObj,
            seat: seat
          })
        }else{
          alert('This seat is taken');
        }
      }
    }



    render() {
      // console.log('\n\n');
      // console.log(this.state.deck[this.state.deck.length-1]);
      // console.log(' +++++++++++ this.state.cardsBoard',this.state.cardsBoard);
      // console.log('\n\n');

      return (

        <ImageBackground style={styles.screenWrap} source={pokerTableBackground} blurRadius={0}>
          <View style={styles.generalView}>

            <ImageReturnPreviousPage title={this.state.gamename} goBack={true}/>
            <Text>{this.state.players}</Text>
            <ImageBackground source={pokerTableItem} resizeMode='contain' style={{flex: 1, position: 'relative', borderWidth: 1}}>
              {seatsList.slice(0, this.state.players).map((seat, key) => (
                <View key={key}>
                  {!this.state[seat.value]?
                    <TouchableHighlight style={[seat.style, styles.seatEmpty]} onPress={() => this.manageSeatAvailability(`${seat.value}`)}>
                      <View>
                        <Text style={styles.seatEmptyTextElement}>{seat.label}</Text>
                        <Icon name='plus-square' type='font-awesome' color='#FFF'/>
                      </View>
                    </TouchableHighlight>
                  :
                  <View style={[seat.style, styles.seatTaken]}>
                    <Text style={styles.seatTakenTextElement}>{this.state[this.state.seat].username}</Text>
                    <Text style={{fontSize: 50, textAlign: 'center'}}><Emoji name={this.state[this.state.seat].emoticon}/></Text>
                  </View>
                  }
                </View>
              ))}



              <View style={{borderWidth: 1, width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center'}}>
                <View>
                  <Image style={{marginLeft: window.width*0.55,width: 40, height: 70, position: 'absolute'}} source={deckGameCards}/>

                  <Animated.View
                    {...this.mainPanResponder.panHandlers}
                    style={{ ...this.mainPosition.getLayout() }}
                  >
                    <Image style={{marginLeft: window.width*0.55,width: 40, height: 70}} source={deckGameCards}/>
                  </Animated.View>

                  <View style={{marginLeft: window.width*0.25,width: 80, height: 80, position: 'absolute', borderWidth: 1, borderStyle: 'dashed',borderRadius: 20, borderColor: '#FFF', justifyContent: 'center', alignItems: 'center'}}>
                    {this.state.cardsBoard.length==0?
                      <Text style={{color: '#FFF', textAlign: 'center'}}>Drop your card here</Text>
                      :
                      Object.keys(this.state.cardsBoard).map((key) => (
                        <View key={key} style={styles.containerCard}>
                          <View style={styles.elementCard}>
                            <View style={styles.elementCardBody}>
                              <Text style={styles.elementValue}>{this.state.cardsBoard[key].Value}</Text>
                              <Image source={this.setImage(this.state.cardsBoard[key].Suit)} style={styles.elementSuit}></Image>
                            </View>
                          </View>
                        </View>
                      ))
                    }
                  </View>
                </View>
              </View>

            </ImageBackground>
            <PokerHand
              dropCardFromDeckToBoard={this.dropCardFromDeckToBoard}
              cardsHand={this.state.cardsHand}/>
          </View>
        </ImageBackground>

      );
    }
  }
