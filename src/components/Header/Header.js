import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

import { useLocation, Link } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className={`header ${
        pathname === '/' ? 'header_type_blue' : 'header_type_black'
      }`}>
      <Link to="/" className="header__logo-link">
        <img
          className={`header__logo ${
            pathname === '/' ? '' : 'header__logo_black'
          }`}
          alt="Логотип сайта 'Movies explorer'"
          src={logo}
        />
      </Link>
      {pathname === '/' ? (
        <nav className="header__btns">
          <Link to="/signup" className="header__button-left">
            Регистрация
          </Link>
          <Link to="signin" className="header__button-right" type="submit">
            Войти
          </Link>
        </nav>
      ) : (
        <Navigation />
      )}
    </header>
  );
}

export default Header;
