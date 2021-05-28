import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

const sagaMidleware = createSagaMiddleware();
const middlewareList =
  process.env.NODE_ENV === 'development'
    ? [sagaMidleware, logger]
    : [sagaMidleware];

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewareList)
);

sagaMidleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
