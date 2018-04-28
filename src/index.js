import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import './styles/index.scss';

let Application;

if (process.env.NODE_ENV === 'development' || module.hot) {
  Application = hot(module)(App);
}

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
