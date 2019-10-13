import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles.js'

export default class SeparatorLine extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.separatorView}>
        <View style={styles.separator}></View>
      </View>
    );
  }

}
