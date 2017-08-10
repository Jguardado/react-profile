import React from 'react';
import { connect } from 'react-redux';

import { setSelectedBlog, setModalActivation } from '../actions/blog-actions';

const BlogSummary = ({ summaries, summaryIndex }) => (
  <div>
   BlogSummary
    {
      summaries[summaryIndex]
    }
  </div>
);

const BlogEntry = ({ image, index, summaries, selectBlog, activateModal }) => (
  <div
    onClick={() => {
      selectBlog(index);
      activateModal(true);
    }}
    className="blog_entry"
  >
    BlogEntry
    <img src={image} alt="thumbnail didnt load" />
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
    Blog in full view
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
}) => (
  <div>
    Basic Blog
    <BlogInfoSection />
    {
      blogEntries.map((entry, i) => (
        <BlogEntry
          key={entry}
          entryIndex={i}
          summaries={blogSummaries}
          image={blogEntryImages[i]}
          index={i}
          selectBlog={selectBlog}
          activateModal={activateModal}
        />
      ))
    }
    {
      selectedBlogIndex && modalActive ?
        <BlogFullView
          blogEntries={blogEntries}
          image={blogEntryImages[selectedBlogIndex]}
          selectedBlogIndex={selectedBlogIndex}
          activateModal={activateModal}
        /> : <div>WHAT THE HECK</div>
    }
  </div>
);

const mapState = state => ({
  blogEntries: state.blogReducer.blogEntries,
  blogEntryImages: state.blogReducer.blogEntryImages,
  selectedBlogIndex: state.blogReducer.selectedBlogIndex,
  modalActive: state.blogReducer.modalActive,
  blogSummaries: state.blogReducer.blogSummaries,
});

const mapDispatch = dispatch => ({
  selectBlog: index => dispatch(setSelectedBlog(index)),
  activateModal: bool => dispatch(setModalActivation(bool)),
});

export default connect(mapState, mapDispatch)(Blog);
