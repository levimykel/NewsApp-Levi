import React, { Component, PropTypes } from 'react';
import {Image, Text, View } from 'react-native';
import styles from '../stylesheets/articleTile';

export default class ArticleTile extends Component {

  static propTypes = {
    content: PropTypes.object.isRequired
  }

  render() {
    return (
      <View>
        <Image source={this.props.content['image']} style={styles.image}/>
        <Text style={styles.text}>
          {this.props.content['title']}
        </Text>
      </View>
    );
  }
}
