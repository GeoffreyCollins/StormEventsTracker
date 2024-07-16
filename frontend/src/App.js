import React from 'react';
import { EventProvider } from './context/EventContext';
import { FatalityProvider } from './context/FatalityContext';
import { EventLocationProvider } from './context/EventLocationContext';
import WeatherForm from './components/WeatherForm';
import EventTypeChart from './components/Charts/EventTypeChart';
import WeatherChart from './components/Charts/WeatherChart';
import FatalityChart from './components/Charts/FatalityChart';
import EventLocationChart from './components/Charts/EventLocationChart';

function App() {
  return (
    <EventProvider>
      <FatalityProvider>
        <EventLocationProvider>
          <div className="App">
            <WeatherForm />
            <EventTypeChart />
            <WeatherChart />
            <FatalityChart />
            <EventLocationChart />
          </div>
        </EventLocationProvider>
      </FatalityProvider>
    </EventProvider>
  );
}

export default App;