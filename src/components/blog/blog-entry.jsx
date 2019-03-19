import React from 'react';
import PropTypes from 'prop-types';
import BlogSummary from './blog-summary.jsx';

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

BlogEntry.defaultProps = {
  index: 0,
  summaries: [],
  selectBlog: () => {},
  activateModal: () => {},
  minImage: '',
};

BlogEntry.propTypes = {
  index: PropTypes.number,
  summaries: PropTypes.array,
  selectBlog: PropTypes.func,
  activateModal: PropTypes.func,
  minImage: PropTypes.string,
};

export default BlogEntry;
