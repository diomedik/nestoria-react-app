import React, { useEffect } from 'react';
import { initRangeInput } from './utils';
import './style.css';
const AppInput = ({ searchByCity, fetchCities,  setValueMaxPrice, setValueMinPrice, minValue, maxValue,  setMinValueBedrooms,  setMaxValueBedrooms, changeChoiceByPhoto, minBed, maxBed }) => {
  useEffect(() => {
    initRangeInput();
  })
  return (
    <div className="search-input">
      <input className="search-input__input" placeholder="City..." onChange={searchByCity}/>
      <div>
        <label>With photo<input type="checkbox" onClick={changeChoiceByPhoto} defaultChecked="true"/></label>
        <div className="bedroom-inputs">
          <span>Range of bedrooms</span>
          <div>
            <label>Min:<input value={minBed} className="bedroom-input" min="0" max="10" type="number" onChange={setMinValueBedrooms}/></label>
            <label>Max:<input value={maxBed} className="bedroom-input" min="1" max="20" type="number" onChange={setMaxValueBedrooms}/></label>
          </div>
        </div>
        <div className="price-slider">
            <label className="min-price">
              £{minValue}
              <input className="min-input input-range" type="range" min="450000" max="5000000" step="50000" onChange={setValueMinPrice}/>
            </label>
            <label className="max-price">
              £{maxValue}
              <input className="max-input input-range" type="range" max="10000000" min="1000000" step="50000" onChange={setValueMaxPrice} value={maxValue}/>
            </label>
        </div>
      </div>
      <button className="search-input__button" onClick={fetchCities}>Search</button>
    </div>
  );
}

export default AppInput;