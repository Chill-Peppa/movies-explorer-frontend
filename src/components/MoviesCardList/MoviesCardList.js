import React from 'react';
import './MoviesCardList.css';
//import { moviesArray } from '../../utils/movies.js';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  onToggleLike,
  favoriteMovies,
  onRemoveMovie,
}) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__elements">
        {movies.map((item) => {
          return (
            <MoviesCard
              onToggleLike={onToggleLike}
              favoriteMovies={favoriteMovies}
              onRemoveMovie={onRemoveMovie}
              movie={item}
              key={item.id || item.movieId}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default MoviesCardList;
