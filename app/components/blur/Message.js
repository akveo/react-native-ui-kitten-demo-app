import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-native';

import {RkConfig} from 'react-native-ui-kitten';
import MessageBase from '../common/Message'

export default class MessageBlur extends MessageBase {

  getStyles(){
    return styles;
  }

}

const styles = StyleSheet.create({
  messageContainer: {
    backgroundColor: RkConfig.colors.blurBgStrong,
    alignSelf: 'flex-start',
    marginRight: 50,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginVertical: 5
  },
  myMessageContainer: {
    backgroundColor: RkConfig.colors.blurBg,
    alignSelf: 'flex-end',
    marginLeft: 50,
    marginRight: 0
  },
  messageText: {
    minWidth: 16,
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: RkConfig.colors.blurTextStrong
  }
});