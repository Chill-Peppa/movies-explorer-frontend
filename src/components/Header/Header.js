import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
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

  return (
    <header className="header header_type_black">
      <img
        className="header__logo"
        alt="Логотип сайта 'Movies explorer'"
        src={logo}
      />
      <Navigation />
    </header>
  );
}

export default Header;
