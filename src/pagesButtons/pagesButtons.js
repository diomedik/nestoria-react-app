import React from 'react';

const pagesButtons = ({ selectCountOfItems }) => {
  return (
    <div className="pagination">
      <span>Select count of items</span>
      <div>
        <button className="pagination-button search-input__button" onClick={selectCountOfItems}>5</button>
        <button className="pagination-button search-input__button" onClick={selectCountOfItems}>10</button>
        <button className="pagination-button search-input__button" onClick={selectCountOfItems}>20</button>
      </div>
    </div>
  );
}

export default pagesButtons;