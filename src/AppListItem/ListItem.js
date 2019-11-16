import React from 'react';
import AppItem from '../AppItem/AppItem'

const ListItems = ({ items, showMore }) => { 
  return (
    <div className="list-items">  
      <ul>
        {
          items.map((item) => (
            <AppItem 
              key={item.title}
              item={item}
            />
          )) 
        }
      </ul>
      <button className="list-items__button" onClick={showMore}>Show more...</button>
    </div> 
  );
}

export default ListItems;