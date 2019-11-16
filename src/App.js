import React, { useState } from 'react';
import ListItems from './AppListItem/ListItem';
import AppInput from './AppInput/AppInput';
import PagesButtons from './pagesButtons/pagesButtons';
import Preloader from './Preloader/Preloader';
import './Preloader/style.css'
import './App.css';

const App = props => {
  const [items, setItems] = useState([]);
  let [countOfItems, setCountOfItems] = useState();
  const [cityOfSearch, setCity] = useState("london");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url = "https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy";
  
  const searchByCity = (event) => {
    setCity(event.target.value);
  }

  const selectCountOfItems = (event) => {
    setCountOfItems(+event.target.textContent);
  }

  const fetchCities = () => {
    if (cityOfSearch === ''){
      url += `&place_name=london&number_of_results=${countOfItems}`;
    } else {
      url += `&place_name=${cityOfSearch}&number_of_results=${countOfItems}`;
      fetch(proxyurl + url)
        .then(response => response.json())
        .then(response => setItems(response.response.listings))
        .catch(err => console.log(err))
    }
  }
  
  const showMore = () => {
    setCountOfItems((countOfItems += 5));
    url += `&place_name=${cityOfSearch}&number_of_results=${countOfItems}`;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(response => setItems(response.response.listings))
  }
   
  return (
    <div className="app">
      <PagesButtons selectCountOfItems={selectCountOfItems}/>  
      {countOfItems > 0 && 
      <AppInput 
        searchByCity={searchByCity} 
        fetchCities={fetchCities}
      />
      }
      {items.length > 0 &&
      <>
        <ListItems 
          items={items}
          showMore={showMore}
        /> 
        <Preloader items={items}/>
      </>      
      }      
    </div>
  );
}

export default App;
