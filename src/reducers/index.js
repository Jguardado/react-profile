import { combineReducers } from 'redux';
import imagesReducer from './images';
import infoPanelReducer from './info-panel';
import blogReducer from './blog';
import gamesReducer from './games';

export default combineReducers({
  blogReducer,
  imagesReducer,
  infoPanelReducer,
  gamesReducer,
});
