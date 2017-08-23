import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

/*eslint-disable */
import Home from './components/home.jsx';
import Landing from './components/landing/landing.jsx';
import Blog from './components/blog.jsx';
import Games from './components/games/games.jsx';
/*eslint-enable */


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
