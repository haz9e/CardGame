import React, { Component } from 'react';
import { View, Text, Image, Alert, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from '../styles/styles.js'
const usn = require('../../../assets/usn.png');


export default class PackageResultForMessages extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  someFunction(){
    Alert.alert(
      'OK',
    )
  }

  checkImageFile = (pic) => {
    if (this.props.profilePicture!=undefined&&
      (typeof this.props.profilePicture == 'string')&&
      pic.substring(0, 4)=="file"){
        console.log('URI');
      return true;
    }else{
      console.log('NOT URI',pic);
      return false;
    }

  }

  render() {
    console.log(typeof this.props.profilePicture);
    return (

      <View style={styles.container_wrap}>

      {this.props.username == this.props.firstName?
        <View style={styles.container_sender}>

          <View style={{flexDirection: 'row'}}>
            <View style={styles.sender}>
              <View style={styles.packageDetailsView}>
                <View style={styles.firstNameAndScoreView}>
                  {/* <Text style={styles.firstName_s}>{this.props.firstName}</Text> */}
                  {/* <Text style={styles.date}>{this.props.date}</Text> */}
                </View>
                <View style={styles.firstNameAndScoreView}>
                  <Text style={styles.message_s}>{this.props.messager}</Text>
                </View>

              </View>
              <Text style={styles.date_s}>{this.props.date}</Text>

            </View>
            {/* <Image source={this.props.profilePicture} style={styles.profilePicture_s}/> */}

            {this.checkImageFile(this.props.profilePicture)?

              <Image source={{ uri: this.props.profilePicture }} style={styles.profilePicture_s}/>
            :

              this.props.profilePicture == ""?
              <Image source={usn} style={styles.profilePicture_s}/>
              :
              <Image source={this.props.profilePicture} style={styles.profilePicture_s}/>
            }
          </View>


        </View>
      :
        <View style={styles.container_receiver}>
          <View style={{flexDirection: 'row'}}>



            {this.checkImageFile(this.props.profilePicture)?



              <Image source={{ uri: this.props.profilePicture }} style={styles.profilePicture_r}/>
            :
              <Image source={this.props.profilePicture} style={styles.profilePicture_r}/>
            }





            <View style={styles.receiver}>
              <View style={styles.packageDetailsView}>
                <View style={styles.firstNameAndScoreView}>
                  {/* <Text style={styles.firstName_r}>{this.props.firstName}</Text> */}
                </View>
                <View style={styles.firstNameAndScoreView}>
                  <Text style={styles.message_r}>{this.props.messager}</Text>
                </View>
              </View>
              <Text style={styles.date_r}>{this.props.date}</Text>

            </View>
          </View>

        </View>
      }
      </View>
    );
  }

}
