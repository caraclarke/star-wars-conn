import React from 'react';

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

export default Films;