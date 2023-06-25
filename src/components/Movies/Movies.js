import React from 'react';
import '../Movies/Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

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
      'inputVal',JSON.stringify(inputValue),
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
  const [isChecked, setIsChecked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  //ФУНКЦИЯ ДЛЯ ТОГГЛА ЧЕКБОКСА
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log('стейт чекбокса В ФУНКЦИИ после клика', isChecked);
  };
  console.log('стейт чекбокса вне функции', isChecked);

  //ФУНКЦИЯ ФИЛЬТРАЦИИ
  const handleFilterMovies = (inputValue, isCheckedState) => {
    /*setIsLoading(true);*/
    localStorage.setItem('inputVal', JSON.stringify(inputValue));
    localStorage.setItem('checkboxState', isCheckedState);

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
      localStorage.setItem('searchedMovies', JSON.stringify(newFilteredArray));
    } else if (!isCheckedState) {
      newFilteredArray = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        );
      });
      setFilteredMovies(newFilteredArray);
      localStorage.setItem('searchedMovies', JSON.stringify(newFilteredArray));
    }
  };

  const searchedMovies = localStorage.getItem('searchedMovies');
  const localInputVal = localStorage.getItem('inputVal');

  React.useEffect(() => {
    console.log(filteredMovies);
    console.log('локал фильмы', searchedMovies);
    console.log('localStorage input value', localInputVal);
  }, [filteredMovies, searchedMovies, localInputVal]);

  const handleRemoveLocalStorageData = (inputValue) => {
    localStorage.removeItem('searchedMovies');
    localStorage.removeItem('localInputVal');
  };

  return (
    <section className="movies">
      <SearchForm
        onFilter={handleFilterMovies}
        onDeleteValues={handleRemoveLocalStorageData}
        checkboxChange={handleCheckboxChange}
        isChecked={isChecked}
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

/*     setTimeout(() => {
      let newFilteredArray = [];

      newFilteredArray = movies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        );
      });

      setFilteredMovies(newFilteredArray);

      localStorage.setItem('searchedMovies', JSON.stringify(newFilteredArray));
    }, 3000); */
