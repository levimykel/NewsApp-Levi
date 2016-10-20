import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import routes from './js/conf/routes';

class NewsApp extends Component {
  render() {
    return routes();
  }
}

AppRegistry.registerComponent('NewsApp', () => NewsApp);
