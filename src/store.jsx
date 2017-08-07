// import { combineReducer } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {

};

export default createStore(
  rootreducer,
  initialState,
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
