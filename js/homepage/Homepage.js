import React, { Component, PropTypes } from 'react';
import {ListView, ScrollView, StatusBar, Text, View } from 'react-native';

import application from '../controllers/application';
import styles from './HomepageStyles';
import ArticleTile from './ArticleTile';



export default class Homepage extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    this.state = {};
    //this.convertDate = this.convertDate.bind(this);
  }
  
  convertDate(timestamp) {
    var months = ['january','february','march','april','may','june','july','august','september','october','november','december'];
    var year = timestamp.getFullYear();
    var month = months[timestamp.getMonth()];
    var date = timestamp.getDate();
    var readableDate = date + ' ' + month + ' ' + year ;
    return readableDate;
  }
  
  setTiles() {
    var articleTileContent = [];
    var articles = this.state.homeContent.articles.results;
    articles.forEach((article) => {
      var timestamp = article.getTimestamp('article.date')
      var date = this.convertDate(timestamp)
      articleTileContent.push(
        {
          "image": {uri: article.getImageView('article.image', 'tile-mobile').url},
          "title": article.getStructuredText('article.title').asText(),
          "author": article.getText('article.author'),
          "date": date,
          "description": article.getFirstParagraph().text,
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
      const layoutDoc = this.state.homeContent.layoutDoc
      const articles = this.state.homeContent.articles
      return (
        <ScrollView>
          <StatusBar
            hidden
          />
          <View style={styles.container}>
            <View style={styles.logoWrapper}>
              <Text style={styles.logo}>
                {layoutDoc.getText('home.logo')}
              </Text>
            </View>
            <ListView style={styles.articleTilesWrapper}
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <ArticleTile content={rowData} navigation={this.props.navigation}/>}
            />
          </View>
        </ScrollView>
      );
    }
  }
}
