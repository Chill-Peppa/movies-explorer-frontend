import React from 'react';
import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

import '../Register/Register.css';
import logo from '../../images/logo.svg';

function Login(props) {
  const { values, handleChange, errors, isValid } = useFormAndValidation();
  /*const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };*/

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.email || !values.password) {
      return;
    }

    console.log('авторизация!');
    props.onLogin(values);
  };
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
            {errors.email}
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
          <button
            className={`sign__button sign__button_login ${
              isValid ? '' : 'sign__button_disabled'
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
