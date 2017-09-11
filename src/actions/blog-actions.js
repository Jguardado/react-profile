import * as types from '../constants';
import { handlefetch } from '../helpers/fetch-helpers';

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

// TODO: separate this fetch protocal to a helper function.
export const fetchBlogEntries = (dispatch) => {
  handlefetch(dispatch, '/blogs', receivedBlogEntries, 'blogs');
};

export const fetchBlogSummaries = (dispatch) => {
  handlefetch(dispatch, '/blog-summaries', receivedBlogSummaries, 'summaries');
};

export const fetchBlogImages = (dispatch) => {
  handlefetch(dispatch, '/blog-images', receivedBlogImages, 'blogImages');
};

export const fetchMiniBlogImages = (dispatch) => {
  handlefetch(dispatch, '/blog-mini-images', receivedBlogMiniImages, 'blogMiniImages');
};
