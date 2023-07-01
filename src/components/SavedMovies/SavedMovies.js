import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ movies, favoriteMovies, onRemoveMovie }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={favoriteMovies} onRemoveMovie={onRemoveMovie} />
    </section>
  );
}

export default SavedMovies;
