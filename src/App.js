import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListItems from './AppListItem/ListItem';
import AppInput from './AppInput/AppInput';
import Preloader from './Preloader/Preloader';
import './Preloader/style.css'
import './App.css';

const App = props => {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [cityOfSearch, setCity] = useState("london");
  const [minPrice, setMinPrice] = useState(450000);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [minBedrooms, setMinBedrooms] = useState(0);
  const [maxBedrooms, setMaxBedrooms] = useState(1);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url = `https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&listing_type=buy&price_min=${minPrice}&price_max=${maxPrice}&bedroom_min=${minBedrooms}&bedroom_max=${maxBedrooms}`;
  const searchByCity = (event) => {
    setCity(event.target.value);
  }
  
  const setValueMinPrice = (event) => {
    setMinPrice(event.target.value);
  }

  const setValueMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  }

  const setMinValueBedrooms = (event) => {
    setMinBedrooms(event.target.value);
  }

  const setMaxValueBedrooms = (event) => {
    setMaxBedrooms(event.target.value);
  }

  const changeChoiceByPhoto = (event) => {
    if(!event.target.checked){
      url += `&has_photo=0`;
    } 
  }
  useEffect(() => {
    fetchCities()
  }, [])

  const fetchCities = () => {
    setIsLoaded(true);
    url += `&place_name=${cityOfSearch}&number_of_results=5`;
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(response => setItems(response.response.listings))
      .then(() => {
        if(items.length !== !items.length){
          setIsLoaded(false)
        } 
      })
      .catch(err => console.log(err))
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
        }
      })
      .catch(err => console.log(err))
  }
   
  return (
    <div className="app">
      <Link to="/Favorite"><button className="button-favorite">Favorite</button></Link>  
      <AppInput 
        searchByCity={searchByCity} 
        fetchCities={fetchCities}
        setValueMaxPrice={setValueMaxPrice}
        setValueMinPrice={setValueMinPrice}
        minValue={minPrice}
        maxValue={maxPrice}
        setMinValueBedrooms={setMinValueBedrooms}
        setMaxValueBedrooms={setMaxValueBedrooms}
        changeChoiceByPhoto={changeChoiceByPhoto}
        minBed={minBedrooms}
        maxBed={maxBedrooms}
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
