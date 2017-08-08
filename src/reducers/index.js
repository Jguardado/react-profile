import { combineReducers } from 'redux';
import imagesReducer from './images';
import infoPanelReducer from './info-panel';


export default combineReducers({
  imagesReducer,
  infoPanelReducer,
});
