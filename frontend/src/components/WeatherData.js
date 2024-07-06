import React, { useState } from 'react';
import WeatherForm from './WeatherForm';
import WeatherChart from './WeatherChart';
import WeatherList from './WeatherList';
import { fetchWeather } from '../services/weatherService';

const WeatherData = () => {
  const [data, setData] = useState([]);
  const [hasData, setHasData] = useState(false);

  const handleFormSubmit = async (state) => {
    try {
      const weatherData = await fetchWeather(state);
      setData(weatherData);
      setHasData(true);
    } catch (error) {
      console.error('Error getting data:', error);
      setHasData(false);
    }
  };

  return (
    <div>
      <WeatherForm onSubmit={handleFormSubmit} />
      {hasData ? (
        <>
          <WeatherChart data={data} />
          <WeatherList data={data} />
        </>
      ) : (
        <p>Please enter a state to get the weather data.</p>
      )}
    </div>
  );
};

export default WeatherData;