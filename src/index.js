import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { hot } from 'react-hot-loader';
import './styles/index.scss';

if (process.env.NODE_ENV === "development" || module.hot) {
  const HotApp = hot(module)(App);

  render(<HotApp />, document.getElementById('root'));
}

render(<App />, document.getElementById('root'));