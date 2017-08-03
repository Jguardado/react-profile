import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Home from './components/home';
import Landing from './components/landing';
import Blog from './components/blog';
import Games from './components/games';


const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={Landing} />
      <Route path="/blog" component={Blog} />
      <Route path="/games" component={Games} />
    </Route>
  </Router>
);

export default Routes;
