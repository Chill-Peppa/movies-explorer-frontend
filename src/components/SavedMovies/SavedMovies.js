import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { SHORT_MOVIE_DURATION } from '../../utils/constants';

function SavedMovies({ favoriteMovies, onRemoveMovie }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [inputText, setInputText] = React.useState('');
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [notFoundError, setNotFoundError] = React.useState(false);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleFilterMovies = (inputValue, isCheckedState) => {
    localStorage.setItem('inputValFavorite', JSON.stringify(inputValue));
    localStorage.setItem(
      'checkboxStateFavorite',
      JSON.stringify(isCheckedState),
    );

    let newFilteredArray = [];

    if (isCheckedState) {
      newFilteredArray = favoriteMovies.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())) &&
          movie.duration <= SHORT_MOVIE_DURATION
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
          movie.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(inputValue.toLowerCase())
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

  //чтобы связать массивы сохраненных и отфильтрованных
  React.useEffect(() => {
    if (searchedMovies) {
      setFilteredMovies(JSON.parse(searchedMovies));
    } else {
      setFilteredMovies(favoriteMovies);
    }
  }, [searchedMovies, favoriteMovies]);

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
      ) : (
        notFoundError && (
          <p className="movies__not-found">Ничего не найдено 😢</p>
        )
      )}
    </section>
  );
}

export default SavedMovies;
