import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';

const WeatherData = () => {
    const { events } = useContext(EventContext);

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