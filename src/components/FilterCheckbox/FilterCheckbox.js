import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checkboxChange }) {
  return (
    <>
      <div className="filter-checkbox">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          id="switch"
          onChange={checkboxChange}
        />
        <label className="filter-checkbox__label" htmlFor="switch"></label>
        <span className="filter-checkbox__span">Короткометражки</span>
      </div>
    </>
  );
}

export default FilterCheckbox;
