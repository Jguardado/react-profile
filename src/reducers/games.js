import * as types from '../constants';

const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_CODEMIRROR_CONTENT:
      return {
        ...state,
        [action.payload.type]: action.payload.text,
      };
    case types.SET_JS_FRAMEWORK:
      return {
        ...state,
        framework: action.payload,
      };
    default:
      return state;
  }
};

export default gamesReducer;
