import React from 'react';
import { connect } from 'react-redux';
import Films from './presenter';

function mapStateToProps(state) {
  const films = state.film;

  return {
    films
  }
}

export default connect(mapStateToProps)(Films);