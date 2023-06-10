import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Navigation.css';
import BurgerLayer from '../BurgerLayer/BurgerLayer';
import profile from '../../images/profile.svg';

function Navigation() {
  const { pathname } = useLocation();

  const [isBurgerClick, setIsBurgerClick] = React.useState(false);

  const openMenu = () => {
    setIsBurgerClick(true);
  };

  const onCloseDrawer = () => {
    setIsBurgerClick(false);
  };

  return (
    <>
      <nav className="header__navigation">
        <ul className="header__navigation-left">
          <Link
            to="/movies"
            className={`header__navigation-btn ${
              pathname === '/movies' ? 'header__navigation-btn_active' : ''
            }`}>
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            className={`header__navigation-btn ${
              pathname === '/saved-movies'
                ? 'header__navigation-btn_active'
                : ''
            }`}>
            Сохранённые фильмы
          </Link>
        </ul>

        <Link to="/profile" className="header__navigation-right" type="button">
          <span className="header__navigation-span">Аккаунт</span>
          <img className="header__profile" alt="Лого аккаунта" src={profile} />
        </Link>

        {isBurgerClick ? (
          <BurgerLayer onCloseDrawer={onCloseDrawer} />
        ) : (
          <div className="header__burger" onClick={openMenu}>
            <span className="header__burger-span"></span>
            <span className="header__burger-span"></span>
            <span className="header__burger-span"></span>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navigation;
