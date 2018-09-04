import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from './routes.js';
import RouteWithSubRoutes from './RouteWithSubRoutes.jsx';

const Routes = () => (
  <Router>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

export default Routes;
