import React from 'react';
import Homepage from '../homepage/Homepage';
import Article from '../article/Article';
import Router from '../router';

const routeList = [
  {name: 'Homepage', index: 0, component: Homepage},
  {name: 'Article', index: 1, component: Article}
]

export default function () {
  return React.createElement(Router, {routes: routeList} )
}
