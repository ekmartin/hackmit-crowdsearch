import React from 'react';
import Rebase from 're-base';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './main.scss';
import './tasks.scss';

const root = document.querySelector('#root');
const base = Rebase.createClass({
  apiKey: 'AIzaSyAPSjwcMEb7DKqw2giyn2rjhEEYnlDgpIs',
  authDomain: 'hackmit-crowdsearch.firebaseapp.com',
  databaseURL: 'https://hackmit-crowdsearch.firebaseio.com',
  storageBucket: 'hackmit-crowdsearch.appspot.com',
  messagingSenderId: '270258770566'
});

const mount = RootComponent => render(
  <AppContainer>
    <RootComponent base={base} />
  </AppContainer>,
  root
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const RootComponent = require('./components/App').default; // eslint-disable-line
    mount(RootComponent);
  });
}

mount(App);
