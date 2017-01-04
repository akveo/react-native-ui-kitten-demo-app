import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import {RkConfig, RkCard, RkButton, RkText} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {

  render() {
    let user = this.props.user;
    return (
      <View>
        <Image source={user.avatar}
               style={styles.avatar}/>
        <View style={styles.wrap}>
          <RkCard rkCardHeader style={styles.buttonWrap}>
            <RkButton rkType='clear' style={styles.button} innerStyle={styles.buttonInner}>
              <Icon style={styles.controlIcon} name='md-mail'/>
              <RkText> Message</RkText>
            </RkButton>
            <View style={styles.separator}/>
            <RkButton rkType='clear' style={styles.button} innerStyle={styles.buttonInner}>
              <Icon style={styles.controlIcon} name='md-person-add'/>
              <RkText> Follow</RkText>
            </RkButton>
          </RkCard>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrap:{
    backgroundColor: RkConfig.colors.materialGray
  },
  buttonWrap: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 0,
    paddingTop: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: RkConfig.colors.materialGray,
    justifyContent: 'space-around',
    shadowRadius: 3,
    paddingVertical: 5
  },
  separator:{
    width: 1,
    height: 50,
    backgroundColor: RkConfig.colors.materialGray
  },
  button: {
    flex: 1,
    width: 140,
    backgroundColor: RkConfig.colors.transparent,
  },
  buttonInner: {
    color: RkConfig.colors.gray
  },
  controlIcon:{
    fontSize: 24,
    marginRight: 5,
  },
  avatar: {
    width: null,
    height: 200,
  },
  nameText: {
    backgroundColor: RkConfig.colors.materialBg,
    paddingLeft: 20,
    paddingVertical: 5,
    fontSize: 28,
    color: 'white'
  }
});