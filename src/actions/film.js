import * as actionTypes from '../constants/actionTypes';

export function setFilms(films) {
  return {
    type: actionTypes.FILMS_SET,
    films
  };
};

