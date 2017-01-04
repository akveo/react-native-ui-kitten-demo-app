import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import {RkConfig, RkTextInput, RkButton} from 'react-native-ui-kitten';

export default class ChatFooter extends Component {

  render() {
    return (
      <View style={styles.footer}>
        <RkTextInput
          style={styles.input}
          placeholder='Message...'
          placeholderTextColor={RkConfig.colors.blurText}
          rkType='bordered rounded'
          onChangeText={message => this.props.onChange(message)}
          value={this.props.message}
          clearButtonMode='while-editing'
          containerStyle={styles.inputContainer}/>
        <RkButton onPress={() => this.props.onSend()}>
          SEND
        </RkButton>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: RkConfig.colors.blurBgStrong,
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    color: RkConfig.colors.white
  },
  inputContainer:{
    marginHorizontal: 10,
    backgroundColor: RkConfig.colors.transparent,
    borderColor: RkConfig.colors.blurText,
    borderWidth: 0.5
  }
});