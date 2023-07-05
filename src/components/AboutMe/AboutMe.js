import React from 'react';
import './AboutMe.css';
import student from '../../images/student.png';

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__text">
          <p className="about-me__name">Настя</p>
          <p className="about-me__info">
            Фронтенд-разработчик (JavaScript/React.js)
          </p>
          <p className="about-me__description">
            Я родилась и живу в Санкт-Петербурге. Люблю слушать музыку, уже
            около двух лет коллекционирую винил. По образованию я инженер в
            области СВЧ. Поработав немного в этой области захотелось попробовать
            свои силы в программировании, тем более, что опыт есть еще с
            университетских времен. В университете был курс по паскаль, СИ и
            СИ++. Вебом увлеклась в 2022 году. На решение о том, чтобы пройти
            курс по веб-разработке от Практикума меня натолкнул мой друг, за что
            я ему очень благодарна. В свободное время стараюсь прокачивать свои
            навыки и практиковаться в решении задач на codewars. В мои ближайшие
            планы после окончания курса входит активное изучение TypeScript и
            Redux, а также более углубленное изучение React.
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
    </section>
  );
}

export default AboutMe;
