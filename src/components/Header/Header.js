import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header header_type_blue header_type_black">
      <img
        className="header__logo"
        alt="Логотип сайта 'Movies explorer'"
        src={logo}
      />
      <nav class="header__nav">
        <div className="header__movie-btns"></div>
        <div className="header__authorization-btns"></div>
      </nav>
    </header>
  );
}

export default Header;
