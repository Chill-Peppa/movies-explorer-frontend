import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { validateEmail } from '../../utils/functions/validators';

import '../Register/Register.css';
import logo from '../../images/logo.svg';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }

    console.log('авторизация!');
    props.onLogin(values);
  };

  React.useEffect(() => {
    if (props.loggedIn) {
      navigate('/movies');
    }
  }, [props.loggedIn, navigate]);

  return (
    <section className="sign">
      <div className="sign__zone">
        <img className="sign__logo" alt="Лого" src={logo} />
        <h2 className="sign__header">Рады видеть!</h2>
        <form className="sign__form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="email" className="sign__input-header">
            E-mail
          </label>
          <input
            className="sign__form-input"
            name="email"
            value={values.email || ''}
            id="email"
            autoComplete="off"
            type="email"
            minLength="2"
            maxLength="70"
            onChange={handleChange}
            required
          />
          <span
            className={`sign__input-error ${
              isValid ? '' : 'sign__input-error_active'
            }`}>
            {validateEmail(values.email).error}
          </span>
          <label htmlFor="password" className="sign__input-header">
            Пароль
          </label>
          <input
            className="sign__form-input"
            name="password"
            value={values.password || ''}
            id="password"
            autoComplete="off"
            type="password"
            minLength="2"
            maxLength="40"
            onChange={handleChange}
            required
          />
          <span
            className={`sign__input-error ${
              isValid ? '' : 'sign__input-error_active'
            }`}>
            {errors.password}
          </span>
          <span
            className={`sign__api-error ${
              props.serverError ? '' : 'sign__api-error_disabled'
            }`}>
            {props.serverError.error}
          </span>
          <button
            className={`sign__button sign__button_login ${
              isValid && validateEmail(values.email).activeButton
                ? ''
                : 'sign__button_disabled'
            }`}
            type="submit">
            Войти
          </button>
          <p className="sign__register">
            Ещё не зарегистрированы?{' '}
            <Link to="/signup" className="sign__enter">
              Регистрация
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
