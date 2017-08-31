import * as types from '../constants';

export const setSelectedBlog = blogIndex => ({
  type: types.SET_SELECTED_BLOG_INDEX,
  payload: blogIndex,
});

export const setModalActivation = bool => ({
  type: types.SET_MODAL_ACTIVATION,
  payload: bool,
});

const receivedBlogEntries = blogs => ({
  type: types.RECEIVE_BLOG_ENTIRES,
  payload: blogs,
});

const receivedBlogSummaries = summaries => ({
  type: types.RECEIVE_BLOG_SUMMARIES,
  payload: summaries,
});

const receivedBlogImages = images => ({
  type: types.RECEIVE_BLOG_IMAGES,
  payload: images,
});

// TODO: separate this fetch protocal to a helper function.
export const fetchBlogEntries = dispatch => window.fetch('/blogs')
  .then(res => res.json())
  .then(res => dispatch(receivedBlogEntries(res.blogs)))
  .catch(err => console.log('there was an error fetching blogs: ', err));

export const fetchBlogSummaries = dispatch => window.fetch('/blog-summaries')
  .then(res => res.json())
  .then(res => dispatch(receivedBlogSummaries(res.summaries)))
  .catch(err => console.log('there was an error fetching summaries: ', err));

export const fetchBlogImages = dispatch => window.fetch('/blog-images')
  .then(res => res.json())
  .then(res => dispatch(receivedBlogImages(res.blogImages)))
  .catch(err => console.log('there was an error fetching blog Images: ', err));

