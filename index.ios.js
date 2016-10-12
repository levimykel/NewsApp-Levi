/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
//import { prismic } from './prismic.js';

//var io = require('./node_modules/socket.io-client/socket.io');

var prismic = require('./prismic.js');

//prismic.api("https://prismic-news-example.prismic.io/api", {}).then(function(api) {
//  return api.getByUID('page', "get-started");
//}).then(function(pageContent) {
//  console.log(JSON.stringify(pageContent, null, 4));
//});

var articleTileContent = [
  {"title":'Article 1',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/349fa715e31d25534ce900d7c52f005b140e0bc7_images-1.jpeg'}},
  {"title":'Article 2',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/0f5c33428d70e36cb671e81f024e99bdf48b3406_images.jpeg'}},
  {"title":'Article 3',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/2d877b16762a3cd70be829c47204b58c9a5e369e_screen_fast_mobile.jpg'}},
  {"title":'Article 4',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/c9f89f2112cb1a004c692083bca8cba9b812d00f_635892900467041421-1425876384_writing.jpg'}}
];

class ArticleTile extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.content['image']} style={{width: 313, height: 200}}/>
        <Text style={styles.articleTile}>
          {this.props.content['title']}
        </Text>
      </View>
    );
  }
}

class NewsApp extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(articleTileContent)
    };
  }
  
  render() {
    let 
      pic = {
        uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/349fa715e31d25534ce900d7c52f005b140e0bc7_images-1.jpeg'
      },
      pic2 = {
        uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/0f5c33428d70e36cb671e81f024e99bdf48b3406_images.jpeg'
      },
      pic3 = {
        uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/2d877b16762a3cd70be829c47204b58c9a5e369e_screen_fast_mobile.jpg'
      },
      pic4 = {
        uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/c9f89f2112cb1a004c692083bca8cba9b812d00f_635892900467041421-1425876384_writing.jpg'
      };
    
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            Home
          </Text>
          <Text style={styles.tagline}>
            This is the homepage.
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <ArticleTile content={rowData}/>}
          />
          
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

AppRegistry.registerComponent('NewsApp', () => NewsApp);
