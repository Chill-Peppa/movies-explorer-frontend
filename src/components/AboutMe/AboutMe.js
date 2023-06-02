import React from 'react';
import './AboutMe.css';
import student from '../../images/student.png';
import arrow from '../../images/arrow.svg';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__text">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__info">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className="about-me__github"
            rel="noreferrer"
            href="https://github.com/Chill-Peppa"
            target="_blank">
            Github
          </a>
        </div>

        <img className="about-me__student" alt="Фото студента" src={student} />
      </div>

      <p className="about-me__portfolio">Портфолио</p>
      <ul className="about-me__portfolio-list">
        <li className="about-me__portfolio-item">
          <a
            className="about-me__portfolio-link"
            rel="noreferrer"
            href="https://chill-peppa.github.io/how-to-learn/index.html"
            target="_blank">
            Статичный сайт
            <img className="about-me__arrow" alt="Стрелка" src={arrow} />
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a
            className="about-me__portfolio-link"
            rel="noreferrer"
            href="https://chill-peppa.github.io/russian-travel/index.html"
            target="_blank">
            Адаптивный сайт
            <img className="about-me__arrow" alt="Стрелка" src={arrow} />
          </a>
        </li>
        <li className="about-me__portfolio-item">
          <a
            className="about-me__portfolio-link"
            rel="noreferrer"
            href="https://chill-peppa.github.io/mesto-react/"
            target="_blank">
            Одностраничное приложение
            <img className="about-me__arrow" alt="Стрелка" src={arrow} />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default AboutMe;
