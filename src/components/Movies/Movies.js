import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { moviesArray } from '../../utils/movies.js';

function Movies() {
  console.log(JSON.stringify(moviesArray));
  console.log(`array movie: ${moviesArray}`);
  console.log('array movie', moviesArray);
  return (
    <>
      <section className="movies">
        <SearchForm />
        <MoviesCardList />
        <Footer />
        <Preloader />
      </section>
    </>
  );
}

export default Movies;
