import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import { savedMoviesArray } from '../../utils/savedMovies';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <Header />
      <SearchForm />
      <ul className="saved-movies__list">
        {savedMoviesArray.map((item) => {
          return <MoviesCard movie={item} key={item.movieId} />;
        })}
      </ul>
      <Footer />
    </section>
  );
}

export default SavedMovies;
