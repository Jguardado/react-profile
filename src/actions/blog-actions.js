import * as types from '../constants';

export const setSelectedBlog = blogIndex => ({
  type: types.SET_SELECTED_BLOG_INDEX,
  payload: blogIndex,
});

export const setModalActivation = bool => ({
  type: types.SET_MODAL_ACTIVATION,
  payload: bool,
});
