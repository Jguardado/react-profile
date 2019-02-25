import * as types from '../constants';

const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_SELECTED_BLOG_INDEX:
      return {
        ...state,
        selectedBlogIndex: action.payload,
      };
    case types.RECEIVE_BLOG_ENTIRES:
      return {
        ...state,
        blogEntries: action.payload,
      };
    case types.RECEIVE_BLOG_SUMMARIES:
      return {
        ...state,
        blogSummaries: action.payload,
      };
    case types.RECEIVE_BLOG_IMAGES:
      return {
        ...state,
        blogImages: action.payload,
      };
    case types.RECEIVE_BLOG_MINI_IMAGES:
      return {
        ...state,
        minBlogEntryImages: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
