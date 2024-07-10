import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const WeatherEventCount = () => { // Define WeatherEventCount component
    const { stormEvents } = useContext(AppContext); // Get stormEvents from AppContext

    if (!stormEvents) {
        return null;
    }

    return (
        <div>
            <h3>Storm Event Count</h3> {/* Render the storm event count */}
            <p>There are {stormEvents.count} in {stormEvents.state}</p>
            {stormEvents.year && <p>in {stormEvents.year}</p>}
            <p>Count: {stormEvents.count}</p>
        </div>
    );
};

export default WeatherEventCount;