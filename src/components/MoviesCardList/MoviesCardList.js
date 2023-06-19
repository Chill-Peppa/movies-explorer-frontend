import React from 'react';
import './MoviesCardList.css';
//import { moviesArray } from '../../utils/movies.js';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__elements">
        {movies.map((item) => {
          return <MoviesCard movie={item} key={item.id} />;
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
