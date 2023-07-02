import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound({ loggedIn }) {
  const navigate = useNavigate();

  const handleBack = () => {
    loggedIn ? navigate(-2) : navigate('/');
  };

  return (
    <section className="not-found">
      <span className="not-found__code">404</span>
      <h2 className="not-found__error">Страница не найдена</h2>
      <button className="not-found__back" onClick={handleBack}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
