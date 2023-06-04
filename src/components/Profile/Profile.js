import React from 'react';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__zone">
        <h2 className="sign__header">Рады видеть!</h2>
        <form className="sign__form" noValidate>
          <p className=""></p>
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
          <p className=""></p>
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
        </form>
      </div>
      <p className="sign__register">
        Ещё не зарегистрированы?
        <span className="sign__enter"> Регистрация</span>
      </p>
    </section>
  );
}

export default Profile;
