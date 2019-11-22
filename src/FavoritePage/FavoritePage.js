import React from 'react';
import AppItem from '../AppItem/AppItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
const FavoritePage = (props) => {
  const favItems = useSelector(state => state.favItems)
  const uniqueItems = [...new Set(favItems)]
  return (
    <div className="favorite-page">
      <ul>
        {favItems.length > 0 ? (
          uniqueItems.map(item => 
          <AppItem 
            key={item.summary}
            item={item}
          />)
          ) : (
            <h1 className="favorite-page__title">You haven't favorite house</h1>
          ) 
        }
      </ul>
      <Link to="/"><button className="about-page__button-back">Home</button></Link>
    </div>
  );
}

export default FavoritePage;
