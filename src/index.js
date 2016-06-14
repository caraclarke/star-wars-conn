import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(
  <Films films={films} />,
  document.getElementById('app')
);