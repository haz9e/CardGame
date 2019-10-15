import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';

export const _getItem = async (key) => {
  try {
      var jsonOfItem = await AsyncStorage.getItem(key);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}

export const _setItem = async (key, item) => {
  try {
      var jsonOfItem = await AsyncStorage.setItem(key, item);
      return jsonOfItem;
  } catch (error) {
    console.log(error.message);
  }
}
