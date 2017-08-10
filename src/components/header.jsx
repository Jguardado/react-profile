import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header_container">
    <div className="header_title">Profile of Juan Guardado</div>
    <div>
      <div className="header_span">Just a site to have fun and play with</div>
      <div className="header_button_container">
        <div className="header_button">
          <Link className="header_button_link" to="/">Home</Link>
        </div>
        <div className="header_button">
          <Link className="header_button_link" to="/blog">Blog</Link>
        </div>
        <div className="header_button">
          <Link className="header_button_link" to="/games">Games</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
