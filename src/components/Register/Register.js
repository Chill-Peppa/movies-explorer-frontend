import React from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import './Register.css';
import logo from '../../images/logo.svg';

function Register(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(values);
  };

  return (
    <section className="sign">
      <div className="sign__zone">
        <img className="sign__logo" alt="Лого" src={logo} />
        <h2 className="sign__header">Добро пожаловать!</h2>
        <form className="sign__form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name" className="sign__input-header">
            Имя
          </label>
          <input
            className="sign__form-input"
            name="name"
            value={values.name || ''}
            onChange={handleChange}
            id="name"
            autoComplete="off"
            type="name"
            minLength="2"
            maxLength="70"
            required
          />
          <span
            className={`sign__input-error ${
              isValid ? '' : 'sign__input-error_active'
            }`}>
            {errors.name}
          </span>
          <label htmlFor="email" className="sign__input-header">
            E-mail
          </label>
          <input
            className="sign__form-input"
            name="email"
            value={values.email || ''}
            onChange={handleChange}
            id="email"
            autoComplete="off"
            type="email"
            minLength="2"
            maxLength="70"
            required
          />
          <span
            className={`sign__input-error ${
              isValid ? '' : 'sign__input-error_active'
            }`}>
            {errors.email}
          </span>
          <label htmlFor="password" className="sign__input-header">
            Пароль
          </label>
          <input
            className="sign__form-input"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            id="password"
            autoComplete="off"
            type="password"
            minLength="2"
            maxLength="40"
            required
          />
          <span
            className={`sign__input-error ${
              isValid ? '' : 'sign__input-error_active'
            }`}>
            {errors.password}
          </span>
          <button
            className={`sign__button ${isValid ? '' : 'sign__button_disabled'}`}
            type="submit">
            Зарегистрироваться
          </button>
          <p className="sign__register">
            Уже зарегистрированы?{' '}
            <Link to="/signin" className="sign__enter">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Register;
