import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  //стейт отфильтрованного массива с результатом
  /*const [filteredMovies, setFilteredMovies] = React.useState([]);

  const handleFilterMovies = (inputValue) => {
    setFilteredMovies(
      movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        );
      }),
    );
  };*/

  return (
    <section className="movies">
      <SearchForm /*onFilter={handleFilterMovies}*/ />
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
