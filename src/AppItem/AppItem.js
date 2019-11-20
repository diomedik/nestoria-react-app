import React from 'react';

const AppItem = ({ item }) => {
  const { img_url, title, price_formatted, summary } = item;
  return (
    <li className="list-items__item">
      <div className="left">
        <img className="left__img" src={img_url} alt="#"/>
      </div>
      <div className="right">
        <p className="title">
          {title} 
        </p>
        <span>{summary}</span>
        <p className="price">Price: {price_formatted}</p>
      </div>
    </li>
  );
}

export default AppItem;