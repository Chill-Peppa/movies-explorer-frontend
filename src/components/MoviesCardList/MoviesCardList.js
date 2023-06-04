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
      <button className="movies-card-list__button" type="button">
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
