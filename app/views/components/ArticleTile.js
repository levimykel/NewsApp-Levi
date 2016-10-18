import React, { Component, PropTypes } from 'react';
import {Image, Text, TouchableHighlight, View } from 'react-native';
import styles from '../stylesheets/articleTile';

export default class ArticleTile extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired
  }
  
  _navigate = (uid) => {
    this.props.navigation.transitionTo('Article', {uid: uid});
  }
  
  handlePress = () => {
    this._navigate(this.props.content['uid'])
  }

  render() {
    return (
      <TouchableHighlight onPress={ this.handlePress } underlayColor='rgba(0,0,0,0)'>
        <View>
          <Image source={this.props.content['image']} style={styles.image}/>
          <Text style={styles.text}>
            {this.props.content['title']}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
