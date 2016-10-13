import React, { Component, PropTypes } from 'react';
import {AppRegistry, Image, ListView, ScrollView, Text, TouchableHighlight, View } from 'react-native';

import styles from '../stylesheets/article';

export default class Article extends Component {

  static propTypes = {
    uid: PropTypes.string
  }

  _navigate(){
    this.props.navigation.previous();
  }

  render() {
    console.log("\n\n\n\nArticle UID \n")
    console.log(this.props.uid)
    console.log("\n\n\n\n")
    return (
      <ScrollView>
        <View>
          <Text>Current Scene: Hello</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight onPress={ () => this._navigate() }>
            <Text>Back to Home</Text>
          </TouchableHighlight>
          <Text style={styles.title}>
            Article
          </Text>
        </View>
      </ScrollView>
    );
  }
}
