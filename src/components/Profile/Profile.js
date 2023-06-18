import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import './Profile.css';

function Profile({ onSignOut, onUpdateProfile }) {
  const { values, handleChange, errors, isValid, setValues } =
    useFormAndValidation();
  const currentUser = React.useContext(CurrentUserContext);
  const [showSaveBtn, setShowSaveBtn] = React.useState(false);
  const [showSuccessText, setShowSuccessText] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(values);
    setShowSaveBtn(false);
    setShowSuccessText(true);
  };

  const handleShowSaveButton = (e) => {
    e.preventDefault();
    setShowSaveBtn(true);
    setShowSuccessText(false);
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
        <h2 className="profile__header">Привет, {currentUser.name}!</h2>
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
              disabled={!showSaveBtn}
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
              disabled={!showSaveBtn}
              required
            />
          </div>
          <span
            className={`profile__input-error ${
              isValid ? '' : 'profile__input-error_active'
            }`}>
            {errors.email}
          </span>

          <div className="profile__buttons-zone">
            <span
              className={`profile__success-text ${
                showSuccessText ? '' : 'profile__success-text_disabled'
              }`}>
              Обновление данных прошло успешно!
            </span>

            {showSaveBtn ? (
              <button
                type="submit"
                className={`profile__save ${
                  !isValid ||
                  (values.name === currentUser.name &&
                    values.email === currentUser.email)
                    ? 'profile__save_disabled'
                    : ''
                }`}>
                Сохранить
              </button>
            ) : (
              <button
                type="button"
                className="profile__register"
                onClick={handleShowSaveButton}>
                Редактировать
              </button>
            )}

            <Link to="/signin" className="profile__exit" onClick={onSignOut}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
