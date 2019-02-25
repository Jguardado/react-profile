import * as types from '../constants';
import axios from 'axios';

export const changeImage = image => ({
  type: types.CHANGE_CAROUSEL_IMAGE,
  paylaod: image,
});

export const receivedCarouselImages = images => ({
  type: types.RECEIVED_CAROUSEL_IMAGES,
  payload: images,
});

export const fetchCarouselImages = dispatch => axios.get('http://localhost:5000/api/images')
  .then(res => dispatch(receivedCarouselImages(res.data.images)))
  .catch(err => console.error('there was an error fetching Carousel images: ', err));
