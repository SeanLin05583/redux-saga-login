import React from 'react';
import { render } from 'react-dom';
import App from 'components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import appReducer from 'reducers';
import appSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(appReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app')
);
