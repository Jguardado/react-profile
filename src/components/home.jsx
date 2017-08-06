import React, { PropTypes } from 'react';
import Header from './header.jsx'; // eslint-disable-line

const Home = ({ children }) => (
  <div className="home_container">
    <Header />
    {children}
  </div>
);

Home.propTypes = {
  children: PropTypes.element,
};

Home.defaultProps = {
  children: {},
};

export default Home;
