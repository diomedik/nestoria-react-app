import React, { useState } from 'react';
import ListItems from './AppListItem/ListItem';
import AppInput from './AppInput/AppInput';
import Preloader from './Preloader/Preloader';
import './Preloader/style.css'
import './App.css';

const App = props => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [cityOfSearch, setCity] = useState("london");
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url = "https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy";
  
  const searchByCity = (event) => {
    setCity(event.target.value);
  }

  const fetchCities = () => {
    setIsLoaded(true);
    if (cityOfSearch === ''){
      url += `&place_name=london&number_of_results=5`;
    } else {
      url += `&place_name=${cityOfSearch}&number_of_results=5`;
      fetch(proxyurl + url)
        .then(response => response.json())
        .then(response => setItems(response.response.listings))
        .then(() => {
          if(items.length !== !items.length){
            setIsLoaded(false)
          } else {
            setIsLoaded(false);
          }
        })
        .catch(err => console.log(err))
    }
  }
  
  const showMore = () => {
    setIsLoaded(true);
    const step = 10;
    url += `&place_name=${cityOfSearch}&number_of_results=${items.length += step}`;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(response => setItems(response.response.listings))
      .then(() => {
        if(items.length !== !items.length){
          setIsLoaded(false)  
        } else {
          setIsLoaded(false)
        }
      })
      .catch(err => console.log(err))
  }
   
  return (
    <div className="app">
      <AppInput 
        searchByCity={searchByCity} 
        fetchCities={fetchCities}
      />
      {items.length > 0 &&
        <ListItems 
          items={items}
          showMore={showMore}
          isLoaded={isLoaded}
        />
      }
      <Preloader isLoaded={isLoaded}/>       
    </div>
  );
}

export default App;
