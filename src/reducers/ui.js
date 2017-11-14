import * as types from '../constants';

const ui = (state = {}, action) => {
  switch (action.type) {
    case types.EDIT_PAGE:
      return {
        ...state,
        edit: action.payload,
      };
    default:
      return state;
  }
};

export default ui;
