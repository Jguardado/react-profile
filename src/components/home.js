import React from 'react';
import Header from './header';

const Home = ({ children }) => (
  <div className="home_container">
    <Header />
    {children}
  </div>
);

export default Home;
