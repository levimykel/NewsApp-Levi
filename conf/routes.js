import React from 'react';
import Homepage from '../app/views/components/Homepage';
import Article from '../app/views/components/Article';
import Router from '../app/router';

const routeList = [
  {name: 'Homepage', index: 0, component: Homepage},
  {name: 'Article', index: 1, component: Article}
]

export const init = () => {
  return React.createElement(Router, routeList)
}
