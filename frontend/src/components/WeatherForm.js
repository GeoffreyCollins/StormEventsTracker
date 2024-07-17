import React, { useState, useContext } from 'react';
import axios from 'axios';
import WeatherChart from './Charts/WeatherChart';
import EventTypeChart from './Charts/EventTypeChart';
import EventPercentageChart from './Charts/EventPercentageChart';
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
      <h2>Total Amount of Storm Events by Type</h2>
      <EventTypeChart />
      <h2>Amount of Events Per Month</h2>
      <WeatherChart />
      <h2>Event Percentages</h2>
      <EventPercentageChart />
    </div>
  );
};

export default WeatherForm;