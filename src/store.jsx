import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootreducer from './reducers';
// import { initialState } from '../mock-state';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootreducer,
  {},
  composeEnhancers(
    applyMiddleware(ReduxThunk),
  ),
);
