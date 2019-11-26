import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { markAsFavorite } from '../actions/actions';
import { useDispatch } from 'react-redux';

const AppItem = ({ item }) => {
  const { img_url, title, price_formatted, summary } = item;
  const [addedToFav, setAddedToFav] = useState(false);
  const dispatch = useDispatch();
  
  const onFavoriteButtonClick = (event) => {
    event.preventDefault();
    setAddedToFav(!addedToFav); 
    dispatch(markAsFavorite(item))
  }
  
  return (
    <Link to={{pathname: '/About', state: {item, addedToFav}}}>
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
          <button style={{color: addedToFav ? 'yellow' : '#9999'}} id="favorite-button" className="right__button-favorite" onClick={onFavoriteButtonClick}>★</button>
        </div>
      </li>
    </Link>
  );
}

export default AppItem;
