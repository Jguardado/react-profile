import * as types from '../constants';
import axios from 'axios';
// import { handlefetch } from '../helpers/fetch-helpers';
import {
  getBlogSummaries,
  getBlogImages,
  getMiniBlogImages,
} from '../selectors/blog-selector';

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

const receivedBlogMiniImages = minImages => ({
  type: types.RECEIVE_BLOG_MINI_IMAGES,
  payload: minImages,
});


export const fetchBlogEntries = (dispatch) => {
  // TODO: I'll need to configure this to a base route once I plan to go to prod
  axios.get('http://localhost:5000/api/blogs')
    .then((res) => {
      dispatch(receivedBlogEntries(res.data.blogs));
      return res;
    })
    .then((res) => {
      dispatch(receivedBlogSummaries(getBlogSummaries(res.data.blogs)));
      return res;
    })
    .then((res) => {
      dispatch(receivedBlogImages(getBlogImages(res.data.blogs)));
      return res;
    })
    .then((res) => {
      dispatch(receivedBlogMiniImages(getMiniBlogImages(res.data.blogs)));
    })
    .catch(err => console.log('there was an error fetching blogs: ', err));
};
