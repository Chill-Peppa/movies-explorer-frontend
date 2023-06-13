import React from 'react';
import { Link } from 'react-router-dom';

import './BurgerLayer.css';
import profile from '../../images/profile.svg';

function BurgerLayer({ onCloseDrawer }) {
  return (
    <div className={`burger-layer`}>
      <div className="burger-layer__container">
        <button
          type="button"
          className="burger-layer__close"
          onClick={onCloseDrawer}></button>
        <nav className="burger-layer__menu">
          <ul className="burger-layer__list">
            <Link to="/" className="burger-layer__point">
              Главная
            </Link>
            <Link to="/movies" className="burger-layer__point">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="burger-layer__point">
              Сохранённые фильмы
            </Link>
          </ul>
        </nav>

        <button className="burger-layer__button" type="button">
          <Link to="/profile" className="burger-layer__span">
            Аккаунт
          </Link>
          <img
            className="burger-layer__profile"
            alt="Лого аккаунта"
            src={profile}
          />
        </button>
      </div>
    </div>
  );
}

export default BurgerLayer;
