import React from 'react';

const AppInput = ({ searchByCity, fetchCities }) => {
    return (
        <div className="app-input">
            <input className="app-input__input" placeholder="City..." onChange={searchByCity}/>
            <button className="app-input__button" onClick={fetchCities}>Input city</button>
        </div>
    );
}

export default AppInput;