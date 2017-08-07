// import { combineReducer } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  images: [
    'src/assests/san-fran.jpeg',
    'src/assests/la-street.jpeg',
    'src/assests/railroad.jpeg',
    'src/assests/somewhere.jpeg',
  ],
};

export default createStore(
  rootreducer,
  initialState,
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
