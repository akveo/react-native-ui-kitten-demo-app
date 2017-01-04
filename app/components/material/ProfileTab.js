import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {RkConfig} from 'react-native-ui-kitten';
import ProfileTabBase from "../common/ProfileTab";

export default class ProfileTab extends ProfileTabBase {

  getStyles(){
    return styles;
  }

  static getStyles = () => styles;

}

const styles = StyleSheet.create({
  statContainer: {
    alignItems: 'center',
    backgroundColor: RkConfig.colors.white,
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: RkConfig.colors.white
  },
  statContainerSelected: {
    borderBottomColor: RkConfig.colors.materialBg
  },
  titleStatText: {
    fontSize: 20,
  },
  statTextSelected:{
    color: RkConfig.colors.materialBg
  },
  statText: {
    textAlign: 'center',
    fontSize: 16,
    color: RkConfig.colors.gray
  },
  tabView: {
    backgroundColor: RkConfig.colors.white,
  },
  tabContent: {
    paddingVertical: 15,
    backgroundColor: RkConfig.colors.materialGray
  },
  imageTab: {
    backgroundColor: RkConfig.colors.white,
  },
});