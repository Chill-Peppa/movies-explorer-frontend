import React from 'react';
import './MoviesCardList.css';
import { moviesArray } from '../../utils/movies.js';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__elements">
        {moviesArray.map((item) => {
          return <MoviesCard movie={item} key={item.movieId} />;
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
