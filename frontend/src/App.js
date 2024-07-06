import React from 'react';
import WeatherData from './components/WeatherData';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Data</h1>
      </header>
      <main>
        <WeatherData />
      </main>
    </div>
  );
};

export default App;