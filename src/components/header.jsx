import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  fetchBlogEntries,
  fetchBlogSummaries,
  fetchBlogImages,
} from '../actions/blog-actions';

const Header = ({ fetchBlogs, fetchSummaries, blogImages }) => (
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
        <Link
          className="header_button_link"
          to="/blog"
          onClick={() => {
            fetchBlogs();
            fetchSummaries();
            blogImages();
          }}
        >
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

const mapDispatch = dispatch => ({
  fetchBlogs: () => fetchBlogEntries(dispatch),
  fetchSummaries: () => fetchBlogSummaries(dispatch),
  blogImages: () => fetchBlogImages(dispatch),
});

export default connect(null, mapDispatch)(Header);
