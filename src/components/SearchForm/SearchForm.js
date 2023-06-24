import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { validateSearch } from '../../utils/functions/validators';

function SearchForm({ onFilter }) {
  const { values, handleChange, isValid } = useFormAndValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    //тут будет функция на поиск и отображение фильмов (отфильтрованных)
    onFilter(values.search);
  };

  return (
    <section className="search-form">
      <form className="search-form__input-zone" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          name="search"
          value={values.search || ''}
          onChange={handleChange}
          id="search"
          autoComplete="off"
          type="text"
          placeholder="Фильмы"
          required
        />
        <button className="search-form__button" type="submit" />
        <img className="search-form__icon" src={find} alt="Иконка поиска" />
        <span
          className={`search-form__span ${
            isValid ? '' : 'search-form__span_active'
          }`}>
          {validateSearch(values.search)}
        </span>
      </form>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;
