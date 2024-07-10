import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const WeatherEventCount = () => {
    const { stormEvents } = useContext(AppContext);

    if (!stormEvents) {
        return null;
    }

    return (
        <div>
            <h3>Storm Event Count</h3>
            <p>There are {stormEvents.count} in {stormEvents.state}</p>
            {stormEvents.year && <p>in {stormEvents.year}</p>}
            <p>Count: {stormEvents.count}</p>
        </div>
    );
};

export default WeatherEventCount;