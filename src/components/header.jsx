import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header_container">
    <div className="header_title">Profile of Juan Guardado</div>
    <div>
      <span className="header_span">Just a site to have fun and play with</span>
      <div className="header_button_container">
        <div className="header_button">
          <Link to="/">Home</Link>
        </div>
        <div className="header_button">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="header_button">
          <Link to="/games">Games</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
