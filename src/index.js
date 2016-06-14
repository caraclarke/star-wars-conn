import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './stores/configureStore';
import * as actions from './actions';

import Films from './components/Films';

const films = [
  {
    title: "test",
    director: "test director"
  },
  {
    title: "test2",
    director: "test2 directo2r"
  }
];

const store = configureStore();
store.dispatch(actions.setFilms(films));

ReactDOM.render(
  <Films films={films} />,
  document.getElementById('app')
);