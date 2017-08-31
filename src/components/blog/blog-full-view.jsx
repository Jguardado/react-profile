import React, { PropTypes } from 'react';

const BlogFullView = ({
  blogEntries,
  image,
  selectedBlogIndex,
  activateModal,
}) => (
  <div className="blog_full-view">
    <img
      className="blog_full_view_image"
      src={`localhost:3050${image}`}
      alt="full view pic didnt load"
    />
    <div className="blog_full_view_text_content">
      {
        blogEntries[selectedBlogIndex].data // TODO: This is trhowing an error
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

BlogFullView.defaultProps = {
  blogEntries: [],
  image: '',
  selectedBlogIndex: 0,
  activateModal: () => {},
};

BlogFullView.propTypes = {
  blogEntries: PropTypes.array,
  image: PropTypes.string,
  selectedBlogIndex: PropTypes.number,
  activateModal: PropTypes.func,
};

export default BlogFullView;
