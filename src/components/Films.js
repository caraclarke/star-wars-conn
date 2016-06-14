import React from 'react';
import { connect } from 'react-redux';

  function Films({ films = [] }) {
    return (
      <div>
        {
          films.map((film, key) => {
            return <div className="film" key={key}>{film.title}</div>
          })
        }
      </div>
    )
  }

  function mapStateToProps(state) {
    const films = state.film;
    return {
      films
    }
  }

export default connect(mapStateToProps)(Films);