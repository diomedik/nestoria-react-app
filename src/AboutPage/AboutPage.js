import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
const AboutPage = (props) => {
  const {title, img_url, bathroom_number, bedroom_number, price_formatted, summary} = props.location.state.item;
    return (
      <>
        <div className="about-page">
          <div>
            <img className="left__img" src={img_url} alt="#"/>
          </div>
          <div>
            <p>{title}</p>
            <p>{summary}</p>
            <p>Bathrooms: {bathroom_number}</p>
            <p>Bedrooms: {bedroom_number}</p>
            <p>Price: {price_formatted}</p>
          </div>
        </div>
        <Link to="/"><button className="about-page__button-back">Home</button></Link>
        <Link to="/Favorite"><button className="about-page__button-back">Favorite</button></Link>
        </>
    );
}

export default AboutPage;