import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './MoviesCard.css';
import { timeConverter } from '../../utils/functions/timeConverter';
import { baseImgLink } from '../../utils/constants';

function MoviesCard({ movie }) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = React.useState(false);
  //подом надо не забыть подставить, это для выбора класса лайка
  const cardLikeButtonClassName = `movies-card__icon ${
    isLiked ? 'movies-card__icon_active' : ''
  }`;

  return (
    <li className="movies-card">
      <Link
        className="movies-card__trailer-link"
        to={movie.trailerLink}
        target="_blank">
        <img
          className="movies-card__img"
          src={baseImgLink + movie.image.url}
          alt={movie.nameRU}
        />
      </Link>
      <div className="movies-card__about">
        <h2 className="movies-card__header">{movie.nameRU}</h2>

        {pathname === '/movies' && (
          <button type="button" className="movies-card__icon" alt="Лайк" />
        )}
        {pathname === '/saved-movies' && (
          <button type="button" className="movies-card__delete" alt="Крестик" />
        )}
      </div>
      <span className="movies-card__duration">
        {timeConverter(movie.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
