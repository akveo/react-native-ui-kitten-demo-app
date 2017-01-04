import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import {RkConfig, RkButton, RkCard, RkText} from 'react-native-ui-kitten';

export default class ChatItemBlur extends Component {

  randomColors = ['#00b0ff', '#7cb342', '#e91e63', '#ff9800', '#cddc39', '#aa00ff', '#ffeb3b', '#1de9b6'];

  render() {
    let msg = this.props.message;
    let user = this.props.user;
    let color = this.randomColors[user.id % this.randomColors.length];
    return (
      <TouchableOpacity onPress={()=> {
        this.props.onClick(user)
      }}>
        <RkCard rkCardHeader rkCardFriendItem style={styles.border}>
          <View rkCardRow>
            <View rkCardSideColor style={{backgroundColor: color}}/>
            <Image rkCardAvatarSmall source={user.avatar}/>
            <View>
              <View rkCardRow>
                <RkText rkCardTitle>{user.name.first} {user.name.last}</RkText>
                <View rkCardOnline style={{opacity: user.online ? 0.9 : 0}}/>
              </View>
              <RkText rkCardSubTitle style={styles.subtitle}>{msg.text}</RkText>
            </View>
          </View>
          <View style={styles.timeContainer}>
            <RkText rkCardSubTitle>{msg.time}</RkText>
          </View>
        </RkCard>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  timeContainer: {
    alignSelf: 'flex-start'
  },
  border:{
    borderBottomWidth: 0.5,
    borderBottomColor: RkConfig.colors.blurBg
  }
});
