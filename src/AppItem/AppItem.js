import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { markAsFavorite } from '../actions/actions';
import { useDispatch } from 'react-redux';

const AppItem = ({ item }) => {
  const { img_url, title, price_formatted, summary } = item;
  const dispatch = useDispatch();
  
  const onFavoriteButtonClick = (event) => {
    event.preventDefault();
    dispatch(markAsFavorite(item))
    alert('Added to favorite')  
  }
  
  return (
    <Link to={{pathname: '/About', state: {item}}}>
      <li className="list-items__item" >
        <div className="left">
          <img className="left__img" src={img_url} alt="#"/>
        </div>   
        <div className="right">
          <p className="title">
            {title} 
          </p>
          <span>{summary}</span>
          <p className="price">Price: {price_formatted}</p>
          <button id="favorite-button" className="right__button-favorite" onClick={onFavoriteButtonClick}>★</button>
        </div>
      </li>
    </Link>
  );
}

export default AppItem;
//() => dispatch(markAsFavorite(item))