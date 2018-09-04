import * as types from '../constants';

export const changeImage = image => ({
  type: types.CHANGE_CAROUSEL_IMAGE,
  paylaod: image,
});

export const receivedCarouselImages = images => ({
  type: types.RECEIVED_CAROUSEL_IMAGES,
  payload: images,
});

export const fetchCarouselImages = dispatch => window.fetch('/api/images')
  .then(res => res.json())
  .then(res => dispatch(receivedCarouselImages(res.images)))
  .catch(err => console.log('there was an error fetching Carousel images: ', err));
