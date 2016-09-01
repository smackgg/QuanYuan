import React from 'react';
import ReactDOM from 'react-dom';

import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Main from './containers/main';

import '../assets/styles/style.scss';

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux';
import root from './saga';

const sagaMiddleware = createSagaMiddleware();
function configureStore(initialState = {}) {
  const store = createStore(combineReducers({
    ...rootReducer,
    routing: routerReducer,
  }), initialState, compose(
    applyMiddleware(sagaMiddleware),
  ));
  sagaMiddleware.run(root, store.getState);

  return store;
}


const rootEl = document.getElementById('app');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const appProps = {
  store,
  history,
};
ReactDOM.render(<Main {...appProps}/>,rootEl);
// ReactDOM.render(
//   <AppContainer>
//     <App {...appProps} />
//   </AppContainer>,
//   rootEl
// );