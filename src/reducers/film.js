import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FILMS_SET:
      return setFilms(state, action);
  }

  return state;
}

function setFilms(state, action) {
  const { films } = action;
  return [ ...state, ...films ];
}