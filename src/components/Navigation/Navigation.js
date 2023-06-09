import React from 'react';
import './Navigation.css';
import BurgerLayer from '../BurgerLayer/BurgerLayer';
import profile from '../../images/profile.svg';

function Navigation({ isClick, onOpenBurger }) {
  return (
    <>
      <nav className="header__navigation">
        <ul className="header__navigation-left">
          <li className="header__navigation-btn">Фильмы</li>
          <li className="header__navigation-btn">Сохранённые фильмы</li>
        </ul>

        <button className="header__navigation-right" type="button">
          <span className="header__navigation-span">Аккаунт</span>
          <img className="header__profile" alt="Лого аккаунта" src={profile} />
        </button>

        <div className="header__burger">
          <span className="header__burger-span"></span>
          <span className="header__burger-span"></span>
          <span className="header__burger-span"></span>
        </div>
        <BurgerLayer />
      </nav>
    </>
  );
}

export default Navigation;
