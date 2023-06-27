import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({ movies, moviesError }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [notFoundError, setNotFoundError] = React.useState(false);
  const [showApiError, setShowApiError] = React.useState(false);

  //Функция для onChange поиска
  const handleSearchChange = (e) => {
    e.preventDefault();

    setInputText(e.target.value);
  };

  //Функция тоггла чекбокса
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('стейт чекбокса В ФУНКЦИИ после клика', isChecked);
  };
  console.log('стейт чекбокса вне функции', isChecked);

  //Функция фильтрации
  const handleFilterMovies = (inputValue, isCheckedState) => {
    localStorage.setItem('inputVal', JSON.stringify(inputValue));
    localStorage.setItem('checkboxState', JSON.stringify(isCheckedState));

    setNotFoundError(false);
    setIsLoading(true);

    //для проверки прелоадера
    setTimeout(() => {
      let newFilteredArray = [];

      if (isCheckedState) {
        newFilteredArray = movies.filter((movie) => {
          return (
            (movie.nameRU.toLowerCase().includes(inputValue) ||
              movie.nameEN.toLowerCase().includes(inputValue)) &&
            movie.duration <= 40
          );
        });
        setFilteredMovies(newFilteredArray);
        localStorage.setItem(
          'searchedMovies',
          JSON.stringify(newFilteredArray),
        );
      } else if (!isCheckedState) {
        newFilteredArray = movies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)
          );
        });
        setFilteredMovies(newFilteredArray);
        localStorage.setItem(
          'searchedMovies',
          JSON.stringify(newFilteredArray),
        );
      }

      if (moviesError) {
        setShowApiError(true);
      } else if (!moviesError) {
        setShowApiError(false);
      }

      if (newFilteredArray.length === 0) {
        setNotFoundError(true);
      }

      setIsLoading(false);
    }, 2000);
  };

  const searchedMovies = localStorage.getItem('searchedMovies');
  const localInputVal = localStorage.getItem('inputVal');
  const localCheckbox = localStorage.getItem('checkboxState');

  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    }
    if (localCheckbox) {
      setIsChecked(JSON.parse(localCheckbox));
    }
    if (localInputVal) {
      setInputText(JSON.parse(localInputVal));
    }
  }, [searchedMovies, localCheckbox, localInputVal]);

  /*React.useEffect(() => {
    console.log(filteredMovies);
    console.log('локал фильмы', searchedMovies);
    console.log('localStorage input value', localInputVal);
  }, [filteredMovies, searchedMovies, localInputVal]);*/

  return (
    <section className="movies">
      <SearchForm
        onFilter={handleFilterMovies}
        checkboxChange={handleCheckboxChange}
        isChecked={isChecked}
        handleInputChange={handleSearchChange}
        inputValue={inputText}
      />

      {showApiError ? (
        <p className="movies__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : isLoading ? (
        <Preloader />
      ) : notFoundError ? (
        <p className="movies__not-found">Ничего не найдено 😢</p>
      ) : (
        <MoviesCardList movies={filteredMovies} moviesError={moviesError} />
      )}

      <div className="movies__button-zone">
        <button className="movies__button" type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
