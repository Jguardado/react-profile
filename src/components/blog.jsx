import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setSelectedBlog, setModalActivation } from '../actions/blog-actions';

const BlogSummary = ({ summaries, summaryIndex }) => (
  <div className="blog_entry_summary">
    {
      summaries[summaryIndex]
    }
  </div>
);

const BlogEntry = ({
  index,
  summaries,
  selectBlog,
  activateModal,
  minImage,
}) => (
  <div
    className="blog_entry"
    onClick={() => {
      selectBlog(index);
      activateModal(true);
    }}
  >
    <img className="blog_entry_image"src={minImage} alt="thumbnail didnt load" />
    <BlogSummary summaryIndex={index} summaries={summaries} />
  </div>
);

const BlogInfoSection = ({ info }) => (
  <div className="blog_info_section">
    {info}
  </div>
);

const BlogFullView = ({
  blogEntries,
  image,
  selectedBlogIndex,
  activateModal,
}) => (
  <div className="blog_full-view">
    <img
      className="blog_full_view_image"
      src={image}
      alt="full view pic didnt load"
    />
    <div className="blog_full_view_text_content">
      {
        blogEntries[selectedBlogIndex]
      }
    </div>
    <div
      className="blog_full_view_close_btn"
      onClick={() => activateModal(false)}
    >
      CLOSE
    </div>
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
          key={entry}
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
  blogEntries: PropTypes.arr,
  blogEntryImages: PropTypes.arr,
  selectedBlogIndex: PropTypes.number,
  modalActive: PropTypes.bool,
  blogSummaries: PropTypes.arr,
  selectBlog: PropTypes.func,
  activateModal: PropTypes.func,
  minBlogEntryImages: PropTypes.arr,
  blogInfoSection: PropTypes.string,
};

BlogFullView.propTypes = {
  blogEntries: PropTypes.arr,
  image: PropTypes.string,
  selectedBlogIndex: PropTypes.number,
  activateModal: PropTypes.func,
};

BlogInfoSection.propTypes = {
  info: PropTypes.string,
};

BlogEntry.propTypes = {
  index: PropTypes.number,
  summaries: PropTypes.arr,
  selectBlog: PropTypes.func,
  activateModal: PropTypes.func,
  minImage: PropTypes.string,
};

BlogSummary.propTypes = {
  summaries: PropTypes.arr,
  summaryIndex: PropTypes.number,
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

BlogFullView.defaultProps = {
  blogEntries: [],
  image: '',
  selectedBlogIndex: 0,
  activateModal: () => {},
};

BlogInfoSection.defaultProps = {
  info: '',
};

BlogEntry.defaultProps = {
  index: 0,
  summaries: [],
  selectBlog: () => {},
  activateModal: () => {},
  minImage: '',
};

BlogSummary.defaultProps = {
  summaries: [],
  summaryIndex: 0,
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
