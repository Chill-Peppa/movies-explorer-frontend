import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile() {
  return (
    <>
      <section className="profile">
        <h2 className="profile__header">Привет, Виталий!</h2>
        <form className="profile__form" noValidate>
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
              defaultValue={'Временное имя' || ''}
              required
            />
          </div>
          <span className="profile__input-error">Какая-то ошибка...</span>

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
              defaultValue={'Временная почта' || ''}
              required
            />
          </div>
          <span className="profile__input-error">Какая-то ошибка...</span>
        </form>

        <p className="profile__register">Редактировать</p>
        <Link to="/signin" className="profile__exit">
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
