import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state) {
      onSubmit(state);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter state"
      />
      <button type="submit">Get Weather Data</button>
    </form>
  );
};

export default WeatherForm;