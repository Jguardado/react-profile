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

//
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

// <Menu.Item key="mail">
//        <Icon type="mail" />Navigation One
//      </Menu.Item>

class NavigationComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('click ', e);
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
      fetchPanels,
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
                fetchPanels();
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
            <Link to="/games">
                Games
            </Link>
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

// NOTE: Wrapping info
// <div className="header_container">
//   <div className="header_title">Profile of Juan Guardado</div>
//   <div>
//     <div className="header_span">Just a site to have fun and play with</div>
//
//   </div>
// </div>

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

export default connect(null, mapDispatch)(NavigationComp);
