import React from 'react';
import { Link } from 'react-router';

const Header = () => (
  <div className="header_container">
    <div className="header_title">Profile of Juan Guardado</div>
    <div>
      <div className="header_span">Just a site to have fun and play with</div>
      <div className="header_button_container">
        <Link className="header_button_link" to="/">
          <div className="header_button">
            Home
          </div>
        </Link>
        <Link className="header_button_link" to="/blog">
          <div className="header_button">
            Blog
          </div>
        </Link>
        <Link className="header_button_link" to="/games">
          <div className="header_button">
            Games
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
