import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  fetchBlogEntries,
  // fetchBlogSummaries,
  // fetchBlogImages,
  // fetchMiniBlogImages,
} from '../actions/blog-actions';

import {
  fetchCarouselImages,
} from '../actions/carousel-actions';

import {
  fetchPanelInfo,
} from '../actions/info-panel-actions';

const Header = ({
  fetchBlogs,
  fetchSummaries,
  blogImages,
  miniImages,
  fetchCarousel,
  fetchPanels,
}) => (
  <div className="header_container">
    <div className="header_title">Profile of Juan Guardado</div>
    <div>
      <div className="header_span">Just a site to have fun and play with</div>
      <div className="header_button_container">
        <Link
          onClick={() => {
            fetchCarousel();
            fetchPanels();
          }}
          className="header_button_link"
          to="/"
        >
          <div className="header_button">
            Home
          </div>
        </Link>
        <Link
          className="header_button_link"
          to="/blog"
          onClick={() => {
            fetchBlogs();
            // fetchSummaries();
            // blogImages();
            // miniImages();
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

// const mapState = state => ({
//   fetchSummaries: () => fetchBlogSummaries(state),
//   blogImages: () => fetchBlogImages(state),
//   miniImages: () => fetchMiniBlogImages(state),
// });

const mapDispatch = dispatch => ({
  fetchBlogs: () => fetchBlogEntries(dispatch),
  fetchCarousel: () => fetchCarouselImages(dispatch),
  fetchPanels: () => fetchPanelInfo(dispatch),
});

export default connect(null, mapDispatch)(Header);
