import React from 'react';
import { connect } from 'react-redux';

import { setSelectedBlog, setModalActivation } from '../actions/blog-actions';

const BlogSummary = ({ summaries, summaryIndex }) => (
  <div className="blog_summary">
    {
      summaries[summaryIndex]
    }
  </div>
);

const BlogEntry = ({ image, index, summaries, selectBlog, activateModal, minImage }) => (
  <div
    className="blog_entry"
    onClick={() => {
      selectBlog(index);
      activateModal(true);
    }}
  >
    <img src={minImage} alt="thumbnail didnt load" />
    <BlogSummary summaryIndex={index} summaries={summaries} />
  </div>
);

const BlogInfoSection = () => (
  <div>
   BlogInfoSection
  </div>
);

const BlogFullView = ({
  blogEntries,
  image,
  selectedBlogIndex,
  activateModal,
}) => (
  <div className="blog_full-view">
    <img src={image} alt="full view pic didnt load" />
    {
      blogEntries[selectedBlogIndex]
    }
    <div
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
}) => (
  <div className="blog_container">
    Basic Blog
    <BlogInfoSection />
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
          image={blogEntryImages[i]}
          minImage={minBlogEntryImages[i]}
          index={i}
          selectBlog={selectBlog}
          activateModal={activateModal}
        />
      ))
    }
  </div>
);

const mapState = state => ({
  blogEntries: state.blogReducer.blogEntries,
  blogEntryImages: state.blogReducer.blogEntryImages,
  minBlogEntryImages: state.blogReducer.minBlogEntryImages,
  selectedBlogIndex: state.blogReducer.selectedBlogIndex,
  modalActive: state.blogReducer.modalActive,
  blogSummaries: state.blogReducer.blogSummaries,
});

const mapDispatch = dispatch => ({
  selectBlog: index => dispatch(setSelectedBlog(index)),
  activateModal: bool => dispatch(setModalActivation(bool)),
});

export default connect(mapState, mapDispatch)(Blog);
