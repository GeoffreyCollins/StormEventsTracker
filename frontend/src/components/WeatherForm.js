import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => { // Create a form component to get the user input
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state) {
      onSubmit(state);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter State:
        <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)} // Update the state when the input value changes
      />
      <button type="submit">Get Weather Data</button>
      </label>
    </form>
  );
};

export default WeatherForm;