import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Profile.css';

function Profile({ onSignOut }) {
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    //onUpdateProfile(values); - эту функцию пропишем позже в App.js
  };

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setValues(currentUser);
    //console.log(currentUser);
  }, [currentUser, setValues]);

  return (
    <>
      <section className="profile">
        <h2 className="profile__header">Привет, Виталий!</h2>
        <form className="profile__form" onSubmit={handleSubmit} noValidate>
          <div className="profile__input-zone">
            <label htmlFor="name" className="profile__label">
              Имя
            </label>
            <input
              className="profile__input"
              name="name"
              id="name"
              autoComplete="off"
              type="name"
              minLength="2"
              maxLength="70"
              value={values.name || ''}
              onChange={handleChange}
              required
            />
          </div>
          <span
            className={`profile__input-error ${
              isValid ? '' : 'profile__input-error_active'
            }`}>
            {errors.name}
          </span>

          <div className="profile__input-zone">
            <label htmlFor="email" className="profile__label">
              E-mail
            </label>
            <input
              className="profile__input"
              name="email"
              id="email"
              autoComplete="off"
              type="email"
              minLength="2"
              maxLength="40"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <span
            className={`profile__input-error ${
              isValid ? '' : 'profile__input-error_active'
            }`}>
            {errors.email}
          </span>
        </form>

        <p className="profile__register">Редактировать</p>
        <Link to="/signin" className="profile__exit" onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
