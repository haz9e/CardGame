import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';



export const _getItem = async (key) => {
  try {

    console.log(' +++++++++++ _getItem');
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      var jsonOfItem = await AsyncStorage.getItem(key);
      console.log('getItem',jsonOfItem);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}



export const _setItem = async (key, item) => {
  try {
      console.log(' +++++++++++ _setItem');
      //we want to wait for the Promise returned by AsyncStorage.setItem()
      //to be resolved to the actual value before returning the value
      var jsonOfItem = await AsyncStorage.setItem(key, item);
      console.log('setItem',jsonOfItem);

      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}
