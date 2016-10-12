import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ListView,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import routes from './conf/routes';

var articleTileContent = [
  {"title":'Article 1',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/349fa715e31d25534ce900d7c52f005b140e0bc7_images-1.jpeg'}},
  {"title":'Article 2',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/0f5c33428d70e36cb671e81f024e99bdf48b3406_images.jpeg'}},
  {"title":'Article 3',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/2d877b16762a3cd70be829c47204b58c9a5e369e_screen_fast_mobile.jpg'}},
  {"title":'Article 4',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/c9f89f2112cb1a004c692083bca8cba9b812d00f_635892900467041421-1425876384_writing.jpg'}}
];

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
    return routes.init();
  }
}

AppRegistry.registerComponent('NewsApp', () => NewsApp);
