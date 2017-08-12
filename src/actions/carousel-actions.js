import * as types from '../constants';

export const changeImage = image => ({
  type: types.CHANGE_CAROUSEL_IMAGE,
  paylaod: image,
});
