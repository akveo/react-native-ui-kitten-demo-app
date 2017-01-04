import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {RkCard, RkText, RkButton, RkConfig} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FollowerItem extends Component {

  randomColors = ['#00b0ff', '#7cb342', '#e91e63', '#ff9800', '#cddc39', '#aa00ff', '#ffeb3b', '#1de9b6'];

  render() {
    let user = this.props.user;
    let color = this.randomColors[user.id % this.randomColors.length];
    return (
      <TouchableOpacity>
        <RkCard rkCardHeader rkCardFriendItem>
          <View rkCardRowCenter>
            <View rkCardSideColor style={{backgroundColor: color}}/>
            <Image source={user.avatar} rkCardAvatarSmall/>
            <View>
              <RkText rkCardTitle>{user.name.first} {user.name.last}</RkText>
            </View>
            <View rkCardOnline style={{opacity: user.online ? 0.9 : 0}}/>
          </View>
          <RkButton rkType="clear"><Icon rkCardIcon name='ios-person-add-outline'/></RkButton>
        </RkCard>
      </TouchableOpacity>
    )
  }

}


