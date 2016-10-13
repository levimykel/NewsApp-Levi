import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';
import Application from './controllers/application';
import Prismic from './controllers/prismic';
import Json from './utils/json';


export default class Router extends Component {

  constructor(props) {
    super(props);
    this.state = { navigator: null, currentIndex: 0 };
  }

  getRouteByTitle = (routeTitle) => {
    return this.props.routes.find((route) => route.title === routeTitle)
  }

  previous = () => {
    this.state.navigator.pop()
  }

  transitionTo = (routeTitle, data) => {
    const route = this.getRouteByTitle(routeTitle);
    if(!route) throw "We can't find the route " + routeTitle;

    this.state.currentIndex = route.index
    this.state.navigator.push(Json.extends(route, {data}));
  }

  renderScene = (route, navigator) => {
    this.state.navigator = navigator


    const Content = route.component
    const props = Json.extends({
      navigation:{
        previous: this.previous,
        transitionTo: this.transitionTo
      },
      ctx: Prismic.ctx()
    }, route.data)

    return (
      React.createElement(Content, props)
    )
  }

  configureScene = (route, routeStack) =>
    if(this.state.currentIndex < route.index) Navigator.SceneConfigs.FloatFromLeft
    else Navigator.SceneConfigs.PushFromRight
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.routes[0]}
        renderScene={this.renderScene}
        configureScene={this.configureScene} />
    )
  }
}
