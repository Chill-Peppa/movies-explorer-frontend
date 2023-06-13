import React from 'react';
import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className="not-found">
      <span className="not-found__code">404</span>
      <h2 className="not-found__error">Страница не найдена</h2>
      <span className="not-found__back">Назад</span>
    </section>
  );
}

export default PageNotFound;
