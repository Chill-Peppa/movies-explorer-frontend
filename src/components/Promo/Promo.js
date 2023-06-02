import React from 'react';
import './Promo.css';
import mainPic from '../../images/main-picture.png';

function Promo() {
  return (
    <section className="promo">
      <div className="promo_right">
        <h1 className="promo__header">
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className="promo__description">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className="promo__button">Узнать больше</button>
      </div>
      <img
        className="promo__picture"
        alt="Изображение Земли из надписей 'web'"
        src={mainPic}
      />
    </section>
  );
}

export default Promo;
