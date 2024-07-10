import React, { useState } from 'react';
import axios from 'axios';
import WeatherChart from './WeatherChart';

const WeatherForm = () => { // Define WeatherForm component
  const [state, setState] = useState(''); // Initialize state and year as empty strings
  const [year, setYear] = useState(''); // Initialize state and year as empty strings
  const [events, setEvents] = useState([]); // Initialize events as an empty array

  const handleSubmit = async (e) => { // Define the submit handler
    e.preventDefault();
    try { // Fetch weather events from the backend
      const response = await axios.get(`http://localhost:3001/api/storm-events?state=${state.toUpperCase()}&year=${year}`); // Fetch weather events from the backend
      setEvents(response.data); // Set the events state with the response data
    } catch (error) {
      console.error('Error fetching weather events', error);
    }
  };

  return ( // Render the form and WeatherChart component
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