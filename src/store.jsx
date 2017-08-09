// import { combineReducer } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  imagesReducer: {
    images: [
      'src/assests/san-fran.jpeg',
      'src/assests/la-street.jpeg',
      'src/assests/railroad.jpeg',
      'src/assests/somewhere.jpeg',
    ],
    minImages: [
      'src/assests/san-fran-sm.jpeg',
      'src/assests/la-street-sm.jpeg',
      'src/assests/railroad-sm.jpeg',
      'src/assests/somewhere-sm.jpeg',
    ],
  },
  infoPanelReducer: {
    panels: [
      'This is SF I fucks with it, but not since the hipsters come through',
      'This is LA, reminds me of the barrio',
      'This is just a railroad track, dope pic',
      'I dont knwo where this is, but I like it',
    ],
  },
};

export default createStore(
  rootreducer,
  initialState,
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
