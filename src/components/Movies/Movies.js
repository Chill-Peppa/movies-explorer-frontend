import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <div className="movies__button-zone">
        <button className="movies__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
