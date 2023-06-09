import React from 'react';
import './BurgerLayer.css';
import profile from '../../images/profile.svg';

function BurgerLayer() {
  return (
    <div className="burger-layer">
      <div className="burger-layer__container">
        <button type="button" className="burger-layer__close"></button>
        <nav className="burger-layer__menu">
          <ul className="burger-layer__list">
            <li className="burger-layer__point">Главная</li>
            <li className="burger-layer__point">Фильмы</li>
            <li className="burger-layer__point">Сохранённые фильмы</li>
          </ul>
        </nav>

        <button className="burger-layer__button" type="button">
          <span className="burger-layer__span">Аккаунт</span>
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
