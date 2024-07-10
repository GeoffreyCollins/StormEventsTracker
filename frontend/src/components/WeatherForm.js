import React, { useState } from 'react';
import axios from 'axios';
import WeatherChart from './WeatherChart';

const WeatherForm = () => {
  const [state, setState] = useState('');
  const [year, setYear] = useState('');
  const [events, setEvents] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/storm-events?state=${state.toUpperCase()}&year=${year}`);
      setEvents(response.data);
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
      {events.length > 0 && <WeatherChart events={events} />}
    </div>
  );
};

export default WeatherForm;