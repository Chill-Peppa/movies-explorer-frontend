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

  /* ------------ ПОИСК ------------- */

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

  /* ------------ ПАГИНАЦИЯ ------------- */
  const [nextMovies, setNextMovies] = React.useState(0);
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

  //отслеживает текущую ширину экрана
  const handleResize = React.useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  //Функция на рендер фильмов
  const renderMovies = React.useMemo(() => {
    const paginationCounter =
      screenWidth < 768 ? 5 : screenWidth < 1280 ? 8 : 12;

    return filteredMovies.slice(0, paginationCounter + nextMovies);
  }, [nextMovies, screenWidth, filteredMovies]);

  const handleClickButtonMore = () => {
    if (screenWidth < 1280) {
      setNextMovies((prev) => prev + 2);
    } else if (screenWidth >= 1280) {
      setNextMovies((prev) => prev + 3);
    }
  };

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
        <MoviesCardList movies={renderMovies} moviesError={moviesError} />
      )}

      <div className="movies__button-zone">
        <button
          onClick={handleClickButtonMore}
          className="movies__button"
          type="button">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default Movies;
