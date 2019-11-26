import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { markAsFavorite } from '../actions/actions';
import { useDispatch } from 'react-redux';
import './style.css'

const AboutPage = (props) => {
  const { title, img_url, bathroom_number, bedroom_number, price_formatted, summary, car_spaces, construction_year } = props.location.state.item;
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false)
  
  const onFavoriteButtonClick = () => {
    setIsClicked(!isClicked);
    dispatch(markAsFavorite(props.location.state.item))
  }
    return (
      <>
        <div className="about-page__header">
          <Link to="/"><button className="about-page__button-back">Home</button></Link>
          <Link to="/Favorite"><button className="about-page__button-back">Favorite</button></Link>
        </div>
        <div className="about-page">
          <div>
            <img className="left__img" src={img_url} alt="#"/>
          </div>
          <div>
            <p>{title}</p>
            <p>{summary}</p>
            <p>Construction year: {construction_year}</p>
            <p>Bathrooms: {bathroom_number}</p>
            <p>Bedrooms: {bedroom_number}</p>
            <p>Car spaces: {car_spaces}</p>
            <p>Price: {price_formatted}</p>
          </div>
        </div>
        <button style={{background: isClicked ? '#003cff6b' : '#9999'}} id="favorite-button" className="about-page__favorite-button" onClick={onFavoriteButtonClick}>{isClicked ? 'Added' : 'Add to favorite'}</button>
      </>
  );
}

export default AboutPage;