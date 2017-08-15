import * as types from '../constants';

const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_CODEMIRROR_CONTENT:
      return {
        ...state,
        [action.payload.type]: action.payload.text,
      };
    default:
      return state;
  }
};

export default gamesReducer;
