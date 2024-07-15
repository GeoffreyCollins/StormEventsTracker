import React from 'react';
import { EventProvider } from './context/EventContext';
import { FatalityProvider } from './context/FatalityContext';
import { LocationProvider } from './context/LocationContext';
import WeatherForm from './components/WeatherForm';
import EventTypeChart from './components/Charts/EventTypeChart';
import WeatherChart from './components/Charts/WeatherChart';
import FatalityChart from './components/Charts/FatalityChart';

function App() {
  return (
    <EventProvider>
      <FatalityProvider>
        <LocationProvider>
          <div className="App">
            <WeatherForm />
            <EventTypeChart />
            <WeatherChart />
            <FatalityChart />
          </div>
        </LocationProvider>
      </FatalityProvider>
    </EventProvider>
  );
}

export default App;