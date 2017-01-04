import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import {RkConfig, RkButton, RkText} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {

  render() {
    let user = this.props.user;
    return (
      <View>
        <View style={styles.head}>
          <RkButton style={styles.button} innerStyle={styles.buttonIconInner}><Icon name='ios-person'/></RkButton>
          <View style={styles.shadowImage}>
            <Image source={user.avatar} style={styles.avatar}/>
          </View>
          <RkButton style={styles.button} innerStyle={styles.buttonIconInner}><Icon name='ios-mail'/></RkButton>
        </View>
        <RkText style={[styles.text, styles.onlineText]}>
          Online
        </RkText>
        <RkText
          style={[styles.text, styles.nameText]}>{user.name.first} {user.name.last}</RkText>
        <RkText style={[styles.text, styles.statusText]}>
          Head cook and bottle-washer.
        </RkText>
        <RkButton style={[styles.button, styles.followButton]} innerStyle={styles.buttonInner}>
          Follow
        </RkButton>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    shadowColor: 'black',
    shadowRadius: 10,
  },
  shadowImage:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: RkConfig.colors.blurBgLight
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  button: {
    borderWidth: 1,
    borderColor: RkConfig.colors.blurText,
    borderStyle: 'dotted',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: RkConfig.colors.blurBg,
  },
  buttonInner: {
    color: 'white'
  },
  buttonIconInner: {
    color: 'white',
    fontSize: 32,
    width: 25,
    height: 35
  },
  text: {
    textAlign: 'center'
  },
  followButton: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 50,
    marginTop: 15,
    marginBottom: 5,
  },
  onlineText: {
    marginTop: 3,
    marginBottom: 5,
    fontWeight: '100'
  },
  nameText: {
    marginBottom: 3,
    fontSize: 26,
    fontWeight: 'bold'
  },
  statusText: {
    fontSize: 14,
    fontWeight: '100'
  }
});