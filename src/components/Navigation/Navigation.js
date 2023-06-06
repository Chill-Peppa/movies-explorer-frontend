import React from 'react';
import './Navigation.css';
import profile from '../../images/profile.svg';

function Navigation() {
  return (
    <>
      <nav className="header__navigation">
        <div className="header__navigation-left">
          <button className="header__navigation-btn" type="button">
            Фильмы
          </button>
          <button className="header__navigation-btn" type="button">
            Сохранённые фильмы
          </button>
        </div>

        <button className="header__navigation-right" type="button">
          <span className="header__navigation-span">Аккаунт</span>
          <img className="header__profile" alt="Лого аккаунта" src={profile} />
        </button>
      </nav>
    </>
  );
}

export default Navigation;
