import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './MoviesCard.css';
import { timeConverter } from '../../utils/functions/timeConverter';
import { BASE_IMG_LINK } from '../../utils/constants';

function MoviesCard({ movie, favoriteMovies, onToggleLike, onRemoveMovie }) {
  const { pathname } = useLocation();

  //чтобы взять бэкендский айди и прокинуть в функцию удаления
  const likedMovie = favoriteMovies
    ? favoriteMovies.find((item) => item.movieId === movie.id)
    : '';

  // Определяем, есть ли у карточки с фильмом уже лайк
  const isLiked = favoriteMovies
    ? favoriteMovies.some((i) => i.movieId === movie.id)
    : false;

  //Класс для лайка в отдельной переменной
  const cardLikeButtonClassName = `movies-card__icon ${
    isLiked ? 'movies-card__icon_active' : ''
  }`;

  const handleLikeClick = () => {
    onToggleLike(movie, isLiked, likedMovie?._id);
    console.log('на меня кликнули');
  };

  const handleDeleteClick = () => {
    onRemoveMovie(movie._id);
    console.log('на меня кликнули тоже!!!');
  };

  return (
    <li className="movies-card">
      <Link
        className="movies-card__trailer-link"
        to={movie.trailerLink}
        target="_blank">
        <img
          className="movies-card__img"
          src={movie.image.url ? BASE_IMG_LINK + movie.image.url : movie.image}
          alt={movie.nameRU}
        />
      </Link>
      <div className="movies-card__about">
        <h2 className="movies-card__header">{movie.nameRU}</h2>

        {pathname === '/movies' && (
          <button
            onClick={handleLikeClick}
            type="button"
            className={cardLikeButtonClassName}
            alt="Лайк"
          />
        )}
        {pathname === '/saved-movies' && (
          <button
            onClick={handleDeleteClick}
            type="button"
            className="movies-card__delete"
            alt="Крестик"
          />
        )}
      </div>
      <span className="movies-card__duration">
        {timeConverter(movie.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
