import React, { Component, PropTypes } from 'react';
import {ListView, ScrollView, StatusBar, Text, View } from 'react-native';

import application from '../../controllers/application';
import styles from '../stylesheets/homepage';
import ArticleTile from './ArticleTile';

export default class Homepage extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  setTiles() {
    var articleTileContent = [];
    var articles = this.state.homeContent.articles.results;
    articles.forEach(function (article) {
      articleTileContent.push(
        {
          "title":article.getStructuredText('article.title').asText(),
          "image":{uri: article.getImage('article.image').url},
          "uid": article.uid
        }
      );
    });
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state.dataSource = ds.cloneWithRows(articleTileContent);
  }
  
  async componentDidMount() {
    const homeContent = await application.homepage();
    this.setState({homeContent});
  }

  render() {
    if (!this.state.homeContent) {
      return null;
    } else {
      this.setTiles();
      const homeDoc = this.state.homeContent.homeDoc
      const articles = this.state.homeContent.articles
      return (
        <ScrollView>
          <StatusBar
            hidden
          />
          <View style={styles.container}>
            <Text style={styles.title}>
              {homeDoc.getStructuredText('home.title').asText()}
            </Text>
            <Text style={styles.tagline}>
              {homeDoc.getStructuredText('home.description').asText()}
            </Text>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <ArticleTile content={rowData} navigation={this.props.navigation}/>}
            />
          </View>
        </ScrollView>
      );
    }
    
  }
}
