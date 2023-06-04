import React from 'react';
import './MoviesCard.css';
import unlike from '../../images/unlike.svg';
//import like from '../../images/like.svg'
import { timeConverter } from '../../utils/timeConverter';

function MoviesCard({ movie }) {
  return (
    <li className="movies-card">
      <img
        className="movies-card__img"
        src={movie.thumbnail}
        alt={movie.nameRU}
      />
      <div className="movies-card__about">
        <h2 className="movies-card__header">{movie.nameRU}</h2>
        <img className="movies-card__icon" alt="Лайк" src={unlike} />
      </div>
      <span className="movies-card__duration">
        {timeConverter(movie.duration)}
      </span>
    </li>
  );
}

export default MoviesCard;
