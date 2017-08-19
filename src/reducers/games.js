import * as types from '../constants';

const gamesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_CODEMIRROR_CONTENT:
      return {
        ...state,
        [action.payload.type]: action.payload.text,
      };
    case types.SET_JS_FRAMEWORK:
      const { demo, active } = action.payload;
      const currentDemo = state[demo] || {};
      return {
        ...state,
        [demo]: {
          ...currentDemo, active,
        },
      };
    case types.DEACTIVATE_DEMO:
      return {
        ...state,
        [action.payload.demo]: {
          active: action.payload.active,
        },
      };
    default:
      return state;
  }
};

export default gamesReducer;
