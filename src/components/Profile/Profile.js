import React from 'react';
import Header from '../Header/Header';

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__header">Привет, Виталий!</h2>
        <form className="profile__form" noValidate>
          <label htmlFor="name" className="profile__label"></label>
          <input
            className="profile__input"
            name="name"
            id="name"
            autoComplete="off"
            type="name"
            minLength="2"
            maxLength="70"
            required
          />
          <span className="profile__input-error">Какая-то ошибка...</span>
          <label htmlFor="email" className="profile__label"></label>
          <input
            className="profile__input"
            name="email"
            id="email"
            autoComplete="off"
            type="email"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="profile__input-error">Какая-то ошибка...</span>
        </form>

        <p className="profile__register">Редактировать</p>
        <p className="profile__exit">Выйти из аккаунта</p>
      </section>
    </>
  );
}

export default Profile;
