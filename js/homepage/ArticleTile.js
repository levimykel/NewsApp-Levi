import React, { Component, PropTypes } from 'react';
import {Image, Text, TouchableHighlight, View } from 'react-native';
import styles from './ArticleTileStyles';

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
      <View style={styles.articleTile}>
        
        <Image source={this.props.content['image']} style={styles.image} resizeMode="cover"/>
        
        <Text style={styles.title}>
          {this.props.content['title']}
        </Text>
        
        <Text style={styles.metaInfo}>
          {this.props.content['author'] + " "}
          <Text style={styles.date}>
             - {this.props.content['date']}
          </Text>
        </Text>
        
        <Text style={styles.description} ellipsizeMode="tail" numberOfLines={4}>
          {this.props.content['description']}
        </Text>
        
        <TouchableHighlight onPress={ this.handlePress } underlayColor='rgba(0,0,0,0)'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Read the Article
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
