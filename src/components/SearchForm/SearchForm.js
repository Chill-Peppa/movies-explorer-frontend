import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
//import { useFormAndValidation } from '../../hooks/useFormAndValidation';
//import { validateSearch } from '../../utils/functions/validators';

function SearchForm({
  onFilter,
  isChecked,
  checkboxChange,
  handleInputChange,
  inputValue,
}) {
  const [inputError, setInputError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //чиню ошибку инпута
    if (inputValue) {
      setInputError('');
    } else if (!inputValue) {
      setInputError('Нужно ввести ключевое слово. ⛔️');
      return;
    }

    onFilter(inputValue, isChecked);
    console.log('текущее значение инпута:', inputValue);
  };

  return (
    <section className="search-form">
      <form
        className="search-form__input-zone"
        onSubmit={handleSubmit}
        noValidate>
        <input
          className="search-form__input"
          name="search"
          value={inputValue || ''}
          onChange={handleInputChange}
          id="search"
          autoComplete="off"
          type="text"
          placeholder="Фильмы"
          required
        />
        <button className="search-form__button" type="submit" />
        <img className="search-form__icon" src={find} alt="Иконка поиска" />
        <span className={'search-form__span search-form__span_active'}>
          {inputError}
        </span>
      </form>
      <FilterCheckbox isChecked={isChecked} checkboxChange={checkboxChange} />
    </section>
  );
}

export default SearchForm;
