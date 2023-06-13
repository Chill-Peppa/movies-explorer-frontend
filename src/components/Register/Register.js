import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';

function Register(props) {
  return (
    <section className="sign">
      <div className="sign__zone">
        <img className="sign__logo" alt="Лого" src={logo} />
        <h2 className="sign__header">Добро пожаловать!</h2>
        <form className="sign__form" noValidate>
          <label htmlFor="name" className="sign__input-header">
            Имя
          </label>
          <input
            className="sign__form-input"
            name="name"
            id="name"
            autoComplete="off"
            type="name"
            minLength="2"
            maxLength="70"
            required
          />
          <span className="sign__input-error">Какая-то ошибка...</span>
          <label htmlFor="email" className="sign__input-header">
            E-mail
          </label>
          <input
            className="sign__form-input"
            name="email"
            id="email"
            autoComplete="off"
            type="email"
            minLength="2"
            maxLength="70"
            required
          />
          <span className="sign__input-error">Какая-то ошибка...</span>
          <label htmlFor="password" className="sign__input-header">
            Пароль
          </label>
          <input
            className="sign__form-input"
            name="password"
            id="password"
            autoComplete="off"
            type="password"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="sign__input-error">Ошибка...</span>
        </form>
      </div>
      <button className="sign__button" type="submit">
        Зарегистрироваться
      </button>
      <p className="sign__register">
        Уже зарегистрированы?{' '}
        <Link to="/signin" className="sign__enter">
          Войти
        </Link>
      </p>
    </section>
  );
}

export default Register;
