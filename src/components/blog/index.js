import { connect } from 'react-redux';
import { setSelectedBlog, setModalActivation, fetchBlogEntries } from '../../actions/blog-actions';
import Blog from "./blog";

const mapState = ({blogReducer, ui}) => ({
  blogEntries: blogReducer.blogEntries,
  blogEntryImages: blogReducer.blogImages,
  minBlogEntryImages: blogReducer.minBlogEntryImages,
  selectedBlogIndex: blogReducer.selectedBlogIndex,
  blogSummaries: blogReducer.blogSummaries,
  blogInfoSection: blogReducer.blogInfoSection,
  isModalActive: ui.modalActive
});

const mapDispatch = dispatch => ({
  getBlogs: () => fetchBlogEntries(dispatch),
  selectBlog: (index) => dispatch(setSelectedBlog(index)),
  activateModal: (bool) => dispatch(setModalActivation(bool)),
});

export default connect(mapState, mapDispatch)(Blog);
