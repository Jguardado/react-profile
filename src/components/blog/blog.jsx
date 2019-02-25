import React, { PropTypes, Component } from 'react';
import uuid from 'uuid';

import Spinner from "../../spinner";
import BlogEntry from './blog-entry.jsx';
import BlogFullView from './blog-full-view.jsx';

const BlogInfoSection = ({ info }) => (
  <div className="blog_info_section">
    {info}
  </div>
);

class Blog extends Component {
  componentDidMount() {
    const { blogEntries, getBlogs } = this.props;
    if (!blogEntries.length) {
      getBlogs()
    }
  }
  
  render () {
    const {
      blogEntries,
      blogEntryImages,
      selectedBlogIndex,
      isModalActive,
      blogSummaries,
      selectBlog,
      activateModal,
      minBlogEntryImages,
      blogInfoSection,
    } = this.props;

    if (!blogEntries.length) {
      console.log("whats the deal");
      return <Spinner />
    };

    return (
      <div className="blog_container">
        <BlogInfoSection info={blogInfoSection} />
        {
          isModalActive && <BlogFullView
            blogEntries={blogEntries}
            image={blogEntryImages[selectedBlogIndex]}
            selectedBlogIndex={selectedBlogIndex}
            activateModal={activateModal}
            isModalActive={isModalActive}
          />
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
  }

}

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

export default Blog;
