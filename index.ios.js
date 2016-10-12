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
import Homepage from './Homepage';
import Article from './Article';
import Router from './router';

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
    return (
      <Router
        routes = {[
          {title: 'Homepage', index: 0, component: Homepage},
          {title: 'Article', index: 1, component: Article}
        ]}
      />
    )
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









//import Prismic from './prismic';

//var prismic = require('./prismic');

//prismic.api("https://prismic-news-example.prismic.io/api", {}).then(function(api) {
//  return api.getByUID('page', "get-started");
//}).then(function(pageContent) {
//  console.log(JSON.stringify(pageContent, null, 4));
//});
    
//    return (
//      <Navigator
//        initialRoute={routes[0]}
//        initialRouteStack={routes}
//        renderScene={(route, navigator) =>
//          <Homepage
//            title={route.title}
//
//            // Function to call when a new scene should be displayed           
//            toArticle={ () => {    
//              const nextIndex = route.index + 1;
//              navigator.push(routes[1]);
//            }}
//
//            // Function to call to go back to the previous scene
//            onBack={() => {
//              if (route.index > 0) {
//                navigator.pop();
//              }
//            }}
//          />
//        }
//      />
//    )
    
//    return (
//      <Navigator
//        initialRoute={{ name: 'Homepage' }}
//        renderScene={ this.renderScene.bind(this) } 
//      />
//    )




  
//  renderScene(route, navigator) {
//    if(route.name == 'Homepage') {
//      return <Homepage title={route.name} navigator={navigator} />
//    }
//    if(route.name == 'Article') {
//      return <Article title={route.name} navigator={navigator} />
//    }
//  }