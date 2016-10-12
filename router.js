import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Navigator } from 'react-native';
import Application from './controllers/application'


export default class Router extends Component {
  
  constructor(props) {
    super(props);
    this.state = { navigator: null, data: null };
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
    this.state.navigator.push(route);
    console.log('transitionto')
    console.log(data)
    this.state.data = data;
  }

  renderScene = (route, navigator) => {
    this.state.navigator = navigator
    

    const Content = route.component
    let newData = {
      navigation:{
        previous: this.previous,
        transitionTo: this.transitionTo
      },
      ctx: Application.ctx()
    }
    Object.keys(this.state.data || []).map((key, index) => {
      newData[key] = this.state.data[key];
    })
    
    console.log('new data2')
    console.log(newData)
    
    this.state.data = null;
    return (
      React.createElement(Content, newData)
    )
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.routes[0]}
        renderScene={this.renderScene} />
    )
  }
}