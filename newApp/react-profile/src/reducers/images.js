import * as types from '../constants';

const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case types.CHANGE_CAROUSEL_IMAGE:
      return {
        ...state,
        currentImage: action.paylaod,
      };

    case types.RECEIVED_CAROUSEL_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default imagesReducer;
