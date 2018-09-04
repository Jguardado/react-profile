import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

  _renderMenuItem ({key, route, type, handler, label}) {
    return (
      <Menu.Item key={key}>
        <div>
          <Icon type={type} />
          <Link
            onClick={() => {
              handler();
            }}
            to={route}
            >
            {label}
          </Link>
        </div>
      </Menu.Item>
    )
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

    const items = [
      {
        route: '/photography',
        key: 'carousel',
        type: 'compass',
        handler: fetchCarousel,
        label: 'Photos'
      },
      {
        route: '/blog',
        key: 'blog',
        type: 'coffee',
        handler: fetchBlogs,
        label: 'Blog'
      },
      {
        route: '/games',
        key: 'games',
        type: 'fork',
        handler: fetchDemoCode,
        label: 'Games'
      }
    ]

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      {items.map(item => this._renderMenuItem(item))}
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
