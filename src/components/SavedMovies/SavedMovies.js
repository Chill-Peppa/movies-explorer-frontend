import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </section>
  );
}

export default SavedMovies;
