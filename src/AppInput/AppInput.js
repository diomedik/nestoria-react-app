import React from 'react';

const AppInput = ({ searchByCity, fetchCities }) => {
    return (
        <div className="search-input">
            <input className="search-input__input" placeholder="City..." onChange={searchByCity}/>
            <button className="search-input__button" onClick={fetchCities}>Search by city</button>
        </div>
    );
}

export default AppInput;