import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__input-zone">
        <input
          className="search-form__input"
          name="search"
          id="search"
          autoComplete="off"
          type="text"
          placeholder="Фильмы"
        />
        <button className="search-form__button" type="submit" />
        <img className="search-form__icon" src={find} alt="Иконка поиска" />
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
