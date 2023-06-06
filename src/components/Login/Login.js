import React from 'react';
import '../Register/Register.css';
import logo from '../../images/logo.svg';

function Login(props) {
  return (
    <section className="sign">
      <div className="sign__zone">
        <img className="sign__logo" alt="Лого" src={logo} />
        <h2 className="sign__header">Рады видеть!</h2>
        <form className="sign__form" noValidate>
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
          <span className="sign__input-error"></span>
        </form>
      </div>
      <button className="sign__button sign__button_login" type="submit">
        Войти
      </button>
      <p className="sign__register">
        Ещё не зарегистрированы?
        <span className="sign__enter"> Регистрация</span>
      </p>
    </section>
  );
}

export default Login;
