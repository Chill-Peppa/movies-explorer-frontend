import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ favoriteMovies, onRemoveMovie }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [notFoundError, setNotFoundError] = React.useState(false);

  //Функция для onChange поиска
  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  //Функция тоггла чекбокса
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  //Функция фильтрации
  const handleFilterMovies = (inputValue, isCheckedState) => {
    localStorage.setItem('inputValFavorite', JSON.stringify(inputValue));
    localStorage.setItem(
      'checkboxStateFavorite',
      JSON.stringify(isCheckedState),
    );

    //для проверки прелоадера
    let newFilteredArray = [];

    if (isCheckedState) {
      newFilteredArray = favoriteMovies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue) ||
            movie.nameEN.toLowerCase().includes(inputValue)) &&
          movie.duration <= 40
        );
      });
      setFilteredMovies(newFilteredArray);
      localStorage.setItem(
        'searchedMoviesFavorite',
        JSON.stringify(newFilteredArray),
      );
    } else if (!isCheckedState) {
      newFilteredArray = favoriteMovies.filter((movie) => {
        return (
          movie.nameRU.toLowerCase().includes(inputValue) ||
          movie.nameEN.toLowerCase().includes(inputValue)
        );
      });
      setFilteredMovies(newFilteredArray);
      localStorage.setItem(
        'searchedMoviesFavorite',
        JSON.stringify(newFilteredArray),
      );
    }

    if (newFilteredArray.length === 0) {
      setNotFoundError(true);
    }
  };

  const searchedMovies = localStorage.getItem('searchedMoviesFavorite');
  const localInputVal = localStorage.getItem('inputValFavorite');
  const localCheckbox = localStorage.getItem('checkboxStateFavorite');

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

  return (
    <section className="saved-movies">
      <SearchForm
        checkboxChange={handleCheckboxChange}
        isChecked={isChecked}
        handleInputChange={handleSearchChange}
        inputValue={inputText}
        onFilter={handleFilterMovies}
      />

      {filteredMovies.length ? (
        <MoviesCardList movies={filteredMovies} onRemoveMovie={onRemoveMovie} />
      ) : notFoundError ? (
        <p className="movies__not-found">Ничего не найдено 😢</p>
      ) : (
        <MoviesCardList movies={favoriteMovies} onRemoveMovie={onRemoveMovie} />
      )}
    </section>
  );
}

export default SavedMovies;
