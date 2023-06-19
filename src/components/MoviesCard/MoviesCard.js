import React from 'react';
import { Link } from 'react-router-dom';

import './MoviesCard.css';
import { timeConverter } from '../../utils/timeConverter';
import { baseImgLink } from '../../utils/constants';

function MoviesCard({ movie }) {
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
        <button type="button" className="movies-card__icon" alt="Лайк" />
      </div>
      <span className="movies-card__duration">
        {timeConverter(movie.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
