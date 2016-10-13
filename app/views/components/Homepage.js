import React, { Component, PropTypes } from 'react';
import {AppRegistry, Image, ListView, ScrollView, Text, TouchableHighlight, View } from 'react-native';

import application from './controllers/application';
import styles from '../stylesheets/homepage';


const articleTileContent = [
  {"title":'Article 1',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/349fa715e31d25534ce900d7c52f005b140e0bc7_images-1.jpeg'}},
  {"title":'Article 2',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/0f5c33428d70e36cb671e81f024e99bdf48b3406_images.jpeg'}},
  {"title":'Article 3',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/2d877b16762a3cd70be829c47204b58c9a5e369e_screen_fast_mobile.jpg'}},
  {"title":'Article 4',"image":{uri: 'https://prismic-io.s3.amazonaws.com/prismic-news-example/c9f89f2112cb1a004c692083bca8cba9b812d00f_635892900467041421-1425876384_writing.jpg'}}
];

export default class Homepage extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(articleTileContent)
    };
  }

  componentWillMount() {
    application.homepage()
    .then((doc) => {
      console.log(doc)
    })
    .catch((err) => console.log(err))
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  _navigate(){
    this.props.navigation.transitionTo('Article', {uid: "example"});
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Current Scene: Home</Text>
          <TouchableHighlight onPress={this._navigate}>
            <Text>GO To View</Text>
          </TouchableHighlight>
        </View>
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
