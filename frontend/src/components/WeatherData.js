import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const WeatherData = () => {
    const { events } = useContext(AppContext);

    return (
        <div>
            <h2>Storm Events</h2>
            <ul>
                {events.map(event => (
                    <li key={event._id}>{event.EVENT_TYPE} on {event.BEGIN_DATE_TIME}</li>
                ))}
            </ul>
        </div>
    );
};

export default WeatherData;