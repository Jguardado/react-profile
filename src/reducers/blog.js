import * as types from '../constants';

const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_MODAL_ACTIVATION:
      return {
        ...state,
        modalActive: action.payload,
      };
    case types.SET_SELECTED_BLOG_INDEX:
      return {
        ...state,
        selectedBlogIndex: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
