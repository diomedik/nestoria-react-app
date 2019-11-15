import React, { useState } from 'react';
import ListItems from './AppListItem/ListItem';
import AppInput from './AppInput/AppInput';
import './App.css';

const App = props => {
  const [items, setItems] = useState([]);
  const [cityOfSearch, setCity] = useState('london');
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const searchByCity = (event) => {
    setCity(event.target.value);
  }
  
  const fetchCities = () => {
    let url = '';
    if (cityOfSearch === ''){
      url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=london&number_of_results=5`;
    } else {
      url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${cityOfSearch}&number_of_results=5`;
      fetch(proxyurl + url)
        .then(response => response.json())
        .then(response => setItems(response.response.listings))
        .catch(err => console.log(err))
    }
  }
  
  const showMore = () => {
    let url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&place_name=${cityOfSearch}`
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(response => setItems(response.response.listings))
  }
  return (
    <div className="app">
      <AppInput 
        csearchByCity={searchByCity} 
        fetchCities={fetchCities}
      />
      {!items.length ? (
        null
      ) : (
        <ListItems 
          items={items}
          showMore={showMore}
        />
      )}
    </div>
  );
}

export default App;
