import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, ScrollView, Image, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Divider, Icon } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux'
import {AsyncStorage} from 'react-native';
// import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
const backgroundImage = require('../../../assets/backgroundImage.jpg');
const usn = require('../../../assets/usn.png');

import { styles, buttons } from '../styles/styles.js'

//IMPORTED COMPONENTS
import SeparatorLine from '../../../Components/SeparatorLine/component'
import PackageResultForMessages from '../../../Components/PackageResultForMessages/component'
import ImageReturnPreviousPage from '../../../Components/ImageReturnPreviousPage/component'

const guide1 = require('../dist/guide1.jpg');

  export default class MenuChatroom extends Component {
    constructor(props){
      super(props)
      this.navigate = this.props.navigation.navigate,
      this.state = {

        "messageList": [
          // {
          //   "profilePicture": guide1,
          //   "firstName": "Lea",
          //   "date": "12/09/19 16:36",
          //   "messager": "Hello",
          //   "type": "sender"
          // },
          // {
          //   "profilePicture": guide1,
          //   "firstName": "Lea",
          //   "date": "12/09/19 16:36",
          //   "messager": "Ça va?",
          //   "type": "sender"
          // },
          // {
          //   "profilePicture": guide1,
          //   "firstName": "Lea",
          //   "date": "12/09/19 16:36",
          //   "messager": "Je suis Lea",
          //   "type": "receiver"
          // },
          // {
          //   "profilePicture": guide1,
          //   "firstName": "Lea",
          //   "date": "12/09/19 16:36",
          //   "messager": "Et toi?",
          //   "type": "sender"
          // },
        ],

        // username: 'Anonymous',
        typing: '',
        image: '',
        messages: [],
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
            console.log('IMAIIAMAIMAIMIAIMAMI',image);
            this.setState({
              image: image
            })
          }
        } catch (error) {
          // Error retrieving data
          console.log(error);
        }
    }


    sendMessage = async () => {
      if(this.state.typing!=''){

        await this.setState({
          messageList: [ ...this.state.messageList,{
            "profilePicture": this.state.image,
            "firstName": this.state.username,
            "date": this.timeNow(),
            "messager": this.state.typing,
            "type": "sender"
          }],
        });
        this.setState({
          typing: ''
        });
        this.refs.scrollView.scrollToEnd({animated: true});
      }
    }


    timeNow = () => {
      var date = new Date();var aaaa = date.getUTCFullYear();var gg = date.getUTCDate();var mm = (date.getUTCMonth() + 1);
      if (gg < 10){gg = "0" + gg;}if (mm < 10){mm = "0" + mm;}
      var cur_day = aaaa + "-" + mm + "-" + gg;
      var hours = date.getUTCHours();var minutes = date.getUTCMinutes();var seconds = date.getUTCSeconds();
      if (hours < 10){hours = "0" + hours;}if (minutes < 10){minutes = "0" + minutes;}if (seconds < 10){seconds = "0" + seconds;}
      return cur_day + " " + hours + ":" + minutes + ":" + seconds;
    }

    render() {

      return (

        <ImageBackground style={styles.screenWrap} source={backgroundImage} blurRadius={1}>
          <View style={styles.generalView}>

            <ImageReturnPreviousPage title={this.state.username}/>


            <Text>
            https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
            </Text>

            <Text style={{ flex: 1, paddingTop: 50, alignSelf: 'center', color: '#FFF' }}>
              {i18n.t('foo')} {i18n.t('bar', { someValue: Date.now() })}
            </Text>
            {/* <View style={styles.containerHeading}>
              <View style={styles.textSubTitleView}>
                <Text style={styles.textSubTitle}>Username: {this.state.username}</Text>
              </View>
            </View> */}
            {/* <View style={styles.brandLogoCont}>
              <Image resizeMode='contain' source={{ uri: this.state.image }} style={styles.brandLogo}/>
            </View> */}

            <View style={styles.containerMessagesView}>
              <ScrollView ref="scrollView">
                {this.state.messageList.map((message, key) => (
                  <PackageResultForMessages
                    _key={key}
                    key={key}
                    username={this.state.username}
                    profilePicture={message.profilePicture}
                    packageName={message.packageName}
                    firstName={message.firstName}
                    messager={message.messager}
                    type={message.type}
                    date={message.date}
                    places={message.places}
                    spokenLanguages={message.spokenLanguages}
                  />

                ))}
              </ScrollView>
            </View>

            <KeyboardAvoidingView behavior="padding">
              <View style={styles.containerDockView}>
                <View style={styles.dockView}>

                  <TextInput
                    maxLength={40}
                    placeholder="Message"
                    style={styles.typeMessageInput}
                    placeholderTextColor="#999"
                    // maxLength={255}
                    autoCorrect={false}
                    // keyboardType="email-address"
                    autoCapitalize="sentences"
                    returnKeyType="done"
                    value={this.state.typing}
                    onChangeText={(typing) => this.setState({typing})}
                    underlineColorAndroid='rgba(0,0,0,0)'
                  />


                  <View style={styles.containerSendMessageButton} >
                    <Icon
                      style={styles.sendMessageButton}
                      name='paper-plane'
                      type='font-awesome'
                      color='#107BED'
                      onPress={() => {this.sendMessage()}}
                    />
                  </View>

                </View>
              </View>
            </KeyboardAvoidingView>

          </View>
        </ImageBackground>

      );
    }
  }
