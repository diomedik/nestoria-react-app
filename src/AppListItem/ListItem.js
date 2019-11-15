import React from 'react';
import AppItem from '../AppItem/AppItem'
import {generateUniqKey} from '../utils';

const ListItem = ({ items, showMore }) => { 
  return (
    <div className="app-list">  
      <ul>
        {
          items.map((item) => (
            <AppItem 
              key={generateUniqKey()}
              item={item}
            />
          )) 
        }
      </ul>
      <button className="app-list__button" onClick={showMore}>Show more...</button>
    </div> 
  );
}

export default ListItem;