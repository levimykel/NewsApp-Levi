import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

export default class Article extends Component {
  
  static propTypes = {
    uid: PropTypes.string
  }
  
  _navigate(){
    this.props.navigation.previous();
  }
  
  render() {
    console.log(this.props)
    console.log("somethingsomethingsomething")
    console.log(this.props.uid)
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tagline: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  articleTile: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
  },
});