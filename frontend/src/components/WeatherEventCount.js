import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const WeatherEventCount = () => {
  const { events } = useContext(EventContext);

  return (
    <div>
      <h3>Weather Event Count</h3>
      <p>Total Events: {events.length}</p>
    </div>
  );
};

export default WeatherEventCount;