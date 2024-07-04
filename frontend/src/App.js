import React, { useState } from 'react';
import CityInputForm from './components/CityInputForm';
import WeatherData from './components/WeatherData';

const App = () => {
  const [city, setCity] = useState('');

  const handleSearch = (city) => {
    setCity(city);
  };

  return (
    <div>
      <h1>Severe Weather Events</h1>
      <CityInputForm handleSearch={handleSearch} />
      {city && <WeatherData city={city} />}
    </div>
  );
};

export default App;