import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home';
import Landing from './components/landing';

const componentRoutes = {
  component: Home,
  path: '/',
  indexRoute: { component: Landing },
  childRoutes: [
    {
      path: '/blog',
      getComponent(location, cb) {
        System.import('./components/blog')
          .then(module => cb(null, module.default));
      },
    },
    {
      path: '/landing',
      getComponent(location, cb) {
        System.import('./components/landing')
          .then(module => cb(null, module.default));
      },
    },
    {
      path: '/games',
      getComponent(location, cb) {
        System.import('./components/games')
          .then(module => cb(null, module.default));
      },
    },
  ],
};

const Routes = () => (
  <Router history={hashHistory} routes={componentRoutes} />
);

export default Routes;
