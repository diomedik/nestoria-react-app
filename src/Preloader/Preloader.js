import React from 'react';

const Preloader = ({ isLoaded }) => {
  return (
    <div className="preloader" style={{display: isLoaded ? 'flex' : 'none'}}>
      <div className="preloader-item"></div>
      <div className="preloader-item"></div>
      <div className="preloader-item"></div>
    </div> 
  );
}

export default Preloader;