import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {RkConfig, RkButton, RkCard, RkText} from 'react-native-ui-kitten';
import PostImage from './PostImage';

export default class Post extends Component {


  render() {
    let post = this.props.post;
    return (
      <RkCard>
        <View rkCardHeader>
          <View rkCardRowCenter>
            <Image source={post.userAvatar} rkCardAvatarSmall/>
            <View>
              <RkText rkCardTitle>{post.userName}</RkText>
              <RkText rkCardSubTitle>posted photo</RkText>
            </View>
          </View>
        </View>
        <View rkCardContent>
          <PostImage post={post}/>
          {this._renderPostText(post.text)}
        </View>
        <View rkCardFooter>
          <View rkCardRowCenter>
            <RkButton rkType='clear iconButton' onPress={()=> this.props.setLike(post)}>
              <Icon rkCardIcon name={post.liked ? 'ios-heart' : 'ios-heart-outline'}/>
            </RkButton>
            <RkText style={styles.likes}>{post.likes.toString()}</RkText>
            <RkButton rkType='clear iconButton'>
              <Icon rkCardIcon name={'ios-chatbubbles-outline'}/>
            </RkButton>
          </View>
          <RkButton rkType='clear iconButton'>
            <Icon rkCardIcon name={'ios-redo-outline'}/>
          </RkButton>
        </View>
      </RkCard>
    );
  }


  _renderPostText(text) {
    if (text)
      return (
        <View style={styles.text}>
          <RkText style={{fontFamily: null}}>{text}</RkText>
        </View>
      );
    else return (<View/>)
  }


}

const styles = StyleSheet.create({
  likes:{
    fontSize: 16,
    marginTop: -3,
    marginRight: 10
  },
  text: {
    paddingHorizontal: 15,
    paddingTop: 10
  }
});


