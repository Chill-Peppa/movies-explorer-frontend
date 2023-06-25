import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ movies }) {
  /*const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [stateCheckbox, setStateCheckbox] = React.useState(false);

  //получаем из localStorage данные
  const searchedMovies = localStorage.getItem('searchedMovies');
  const localCheckbox = localStorage.getItem('checkboxState');
  const localInputVal = localStorage.getItem('inputVal');

  console.log('состояние чекбокса', localCheckbox);
  console.log(localInputVal);

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(searchedMovies);
    }
  }, [searchedMovies]);

  //при клике будем менять стейт чекбокса
  const handleCheckboxChange = (e) => {
    setStateCheckbox(!stateCheckbox);
  };

  //функция фильтрации массива с фильмами
  const handleFilterMovies = (inputValue, checkboxState) => {
    localStorage.setItem('checkboxState', checkboxState);
    localStorage.setItem(
      'inputVal',
      localStorage.setItem('searchedMovies', JSON.stringify(inputValue)),
    );

    let newFilteredArray = [];

    if (stateCheckbox) {
      newFilteredArray = movies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)) &&
          movie.duration <= 40
        );
      });

      setFilteredMovies(newFilteredArray);
      localStorage.setItem('searchedMovies', JSON.stringify(newFilteredArray));
    } else if (!stateCheckbox) {
      newFilteredArray = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        );
      });
    }

    setFilteredMovies(newFilteredArray);
    localStorage.setItem('searchedMovies', JSON.stringify(newFilteredArray));
  };*/

  const [filteredMovies, setFilteredMovies] = React.useState([]);

  const handleFilterMovies = (inputValue) => {
    let newFilteredArray = [];

    newFilteredArray = movies.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(inputValue) ||
        movie.nameEN.toLowerCase().includes(inputValue)
      );
    });

    setFilteredMovies(newFilteredArray);

    localStorage.setItem('searchedMovies', JSON.stringify(newFilteredArray));
  };

  const searchedMovies = localStorage.getItem('searchedMovies');

  React.useEffect(() => {
    console.log(filteredMovies);
    console.log('локал фильмы', searchedMovies);
  }, [filteredMovies, searchedMovies]);

  return (
    <section className="movies">
      <SearchForm
        onFilter={handleFilterMovies}
        /*checkboxChange={handleCheckboxChange}*/
      />
      <MoviesCardList movies={filteredMovies} />
      <div className="movies__button-zone">
        <button className="movies__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
