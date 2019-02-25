import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './router.jsx';
import store from './store.jsx';

import './styles/style.css';

// import reducers from './reducers';

const reducers = () => {};

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
