import React from 'react';

const AppItem = ({ item }) => {
  const {img_url, title, price_formatted} = item;
  return (
    <li className="app-list__item">
      <div className="app-list__item__left">
        <img className="app-list__item__left__img" src={img_url} alt="#"/>
      </div>
      <div className="app-list__item__right">
        <p>
          {title} 
          <p>Price: {price_formatted}</p>
        </p>
      </div>
    </li>
  );
}

export default AppItem;