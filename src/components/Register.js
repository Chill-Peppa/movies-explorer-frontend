import React from 'react';
import logo from '../images/logo.svg';

function Register(props) {
  return (
    <section className="sign">
      <div className="sign__zone">
        <img className="sign__logo" alt="Лого" src={logo} />
        <h2 className="sign__header">Добро пожаловать!</h2>
        <form className="sign__form" noValidate>
          <p className="sign__input-header">Имя</p>
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
          <p className="sign__input-header">E-mail</p>
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
          <p className="sign__input-header">Пароль</p>
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
          <span className="sign__input-error sign__input-error_visible">
            Что-то пошло не так...
          </span>
        </form>
      </div>
      <button className="sign__button" type="submit">
        Зарегистрироваться
      </button>
      <p className="sign__register">
        Уже зарегистрированы?
        <span className="sign__enter"> Войти</span>
      </p>
    </section>
  );
}

export default Register;
