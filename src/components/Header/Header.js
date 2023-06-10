import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

import { useLocation, Link } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  /*const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };*/

  /*<header className="header header_type_blue">
      <img
        className="header__logo"
        alt="Логотип сайта 'Movies explorer'"
        src={logo}
      />
      <nav className="header__btns">
        <button className="header__button-left">Регистрация</button>
        <button className="header__button-right">Войти</button>
      </nav>
  </header>*/
  /*
  <header className="header header_type_black">
      <img
        className="header__logo"
        alt="Логотип сайта 'Movies explorer'"
        src={logo}
      />
      <Navigation /> </header>
  */

  /*
          <header
      className={`header ${
        pathname === '/' ? 'header_type_black' : 'header_type_blue'
      }`}>
      */

  return (
    <header
      className={`header ${
        pathname === '/' ? 'header_type_blue' : 'header_type_black'
      }`}>
      <img
        className={`header__logo ${
          pathname === '/' ? '' : 'header__logo_black'
        }`}
        alt="Логотип сайта 'Movies explorer'"
        src={logo}
      />
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
