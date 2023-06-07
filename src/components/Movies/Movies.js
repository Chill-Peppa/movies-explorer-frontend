import React from 'react';
import '../Movies/Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesArray } from '../../utils/movies.js';

function Movies() {
  console.log('array movies:', moviesArray);

  return (
    <>
      <section className="movies">
        <Header />
        <SearchForm />
        <MoviesCardList />
        <div className="movies__button-zone">
          <button className="movies__button" type="button">
            Ещё
          </button>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Movies;
