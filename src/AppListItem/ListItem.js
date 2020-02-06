import React from 'react';
import AppItem from '../AppItem/AppItem'

const ListItems = ({ items, showMore, isLoaded }) => { 
  const style = {'display': isLoaded ? 'none' : 'block'}
  return (
    <div className="list-items">  
      <ul>
        {
          items.map((item) => (
            <AppItem 
              key={item.summary}
              item={item}
            />
          )) 
        }
      </ul>
      <button style={style} className="list-items__button" onClick={showMore}>Show more...</button>
    </div> 
  );
}

export default ListItems;