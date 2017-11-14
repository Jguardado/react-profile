import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import { connect } from 'react-redux';
import { Link } from 'react-router';
import {
  fetchBlogEntries,
} from '../actions/blog-actions';

import {
  fetchCarouselImages,
} from '../actions/carousel-actions';

import {
  fetchPanelInfo,
} from '../actions/info-panel-actions';

import {
  fetchDemoInfo,
} from '../actions/games-actions';

class NavigationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchBlogs, fetchCarousel, fetchDemoCode } = this.props;
    fetchCarousel();
    fetchBlogs();
    fetchDemoCode();
  }

  handleClick(e) {
    this.setState({
      current: e.key,
    });
  }

  render() {
    const {
      fetchBlogs,
      fetchSummaries,
      blogImages,
      miniImages,
      fetchCarousel,
      fetchDemoCode,
    } = this.props;

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="carousel">
          <div>
            <Icon type="compass" />
            <Link
              onClick={() => {
                fetchCarousel();
              }}
              to="/"
            >
                Home
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="blog">
          <div>
            <Icon type="coffee" />
            <Link
              to="/blog"
              onClick={() => {
                fetchBlogs();
              }}
            >
                Blog
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="games">
          <div>
            <Icon type="fork" />
            <Link
              onClick={() => fetchDemoCode()}
              to="/games"
            >
              Games
            </Link>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapDispatch = dispatch => ({
  fetchBlogs: () => fetchBlogEntries(dispatch),
  fetchCarousel: () => fetchCarouselImages(dispatch),
  fetchPanels: () => fetchPanelInfo(dispatch),
  fetchDemoCode: () => fetchDemoInfo(dispatch),
});

export default connect(null, mapDispatch)(NavigationComp);
