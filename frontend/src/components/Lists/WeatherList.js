import React from 'react';

const WeatherList = ({ data }) => { // Define WeatherList component
  return (
    <div>
      <h2>Weather Events</h2>
      <ul>
        {data.map((event, index) => (
          <li key={index}>
            <strong>Event Type:</strong> {event.EVENT_TYPE}<br />
            <strong>Date:</strong> {event.BEGIN_DATE_TIME}<br />
            <strong>Location:</strong> {event.STATE}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
