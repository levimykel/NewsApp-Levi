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

class NewsApp extends Component {
  render() {
    return routes();
  }
}

AppRegistry.registerComponent('NewsApp', () => NewsApp);
