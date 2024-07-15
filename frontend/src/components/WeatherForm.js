import React, { useState, useContext } from 'react';
import axios from 'axios';
import WeatherChart from './Charts/WeatherChart';
import EventTypeChart from './Charts/EventTypeChart';
import { EventContext } from '../context/EventContext';

const WeatherForm = () => {
  const { setEvents } = useContext(EventContext);
  const [state, setState] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const eventsResponse = await axios.get(`http://localhost:3001/api/storm-events?state=${state.toUpperCase()}&year=${year}`);
      setEvents(eventsResponse.data);
    } catch (error) {
      console.error('Error fetching weather events', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          State:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        </label>
        <label>
          Year (Optional):
          <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
        </label>
        <button type="submit">Get Storm Events</button>
      </form>
      <EventTypeChart />
      <WeatherChart />
    </div>
  );
};

export default WeatherForm;