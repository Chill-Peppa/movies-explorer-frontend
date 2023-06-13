import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { moviesArray } from '../../utils/movies.js';

function Movies() {
  console.log('array movies:', moviesArray);

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <div className="movies__button-zone">
        <button className="movies__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
