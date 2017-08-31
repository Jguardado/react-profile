import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import BlogEntry from './blog-entry.jsx';
import BlogFullView from './blog-full-view.jsx';

import { setSelectedBlog, setModalActivation } from '../../actions/blog-actions';

const BlogInfoSection = ({ info }) => (
  <div className="blog_info_section">
    {info}
  </div>
);

const Blog = ({
  blogEntries,
  blogEntryImages,
  selectedBlogIndex,
  modalActive,
  blogSummaries,
  selectBlog,
  activateModal,
  minBlogEntryImages,
  blogInfoSection,
}) => (
  <div className="blog_container">
    <BlogInfoSection info={blogInfoSection} />
    {
      modalActive ?
        <BlogFullView
          blogEntries={blogEntries}
          image={blogEntryImages[selectedBlogIndex]}
          selectedBlogIndex={selectedBlogIndex}
          activateModal={activateModal}
        /> : null
    }
    {
      blogEntries.map((entry, i) => (
        <BlogEntry
          key={uuid()}
          entryIndex={i}
          summaries={blogSummaries}
          minImage={minBlogEntryImages[i]}
          index={i}
          selectBlog={selectBlog}
          activateModal={activateModal}
        />
      ))
    }
  </div>
);

Blog.propTypes = {
  blogEntries: PropTypes.array,
  blogEntryImages: PropTypes.array,
  selectedBlogIndex: PropTypes.number,
  modalActive: PropTypes.bool,
  blogSummaries: PropTypes.array,
  selectBlog: PropTypes.func,
  activateModal: PropTypes.func,
  minBlogEntryImages: PropTypes.array,
  blogInfoSection: PropTypes.string,
};

Blog.defaultProps = {
  blogEntries: [],
  blogEntryImages: [],
  selectedBlogIndex: 0,
  modalActive: false,
  blogSummaries: [],
  selectBlog: () => {},
  activateModal: () => {},
  minBlogEntryImages: [],
  blogInfoSection: '',
};

BlogInfoSection.propTypes = {
  info: PropTypes.string,
};

BlogInfoSection.defaultProps = {
  info: '',
};

const mapState = state => ({
  blogEntries: state.blogReducer.blogEntries,
  blogEntryImages: state.blogReducer.blogEntryImages,
  minBlogEntryImages: state.blogReducer.minBlogEntryImages,
  selectedBlogIndex: state.blogReducer.selectedBlogIndex,
  modalActive: state.blogReducer.modalActive,
  blogSummaries: state.blogReducer.blogSummaries,
  blogInfoSection: state.blogReducer.blogInfoSection,
});

const mapDispatch = dispatch => ({
  selectBlog: index => dispatch(setSelectedBlog(index)),
  activateModal: bool => dispatch(setModalActivation(bool)),
});

export default connect(mapState, mapDispatch)(Blog);
