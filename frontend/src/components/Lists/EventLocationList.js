import React, { useContext } from 'react';
import { EventLocationContext } from '../../context/EventLocationContext';

const EventLocationList = () => {
    const { eventLocations } = useContext(EventLocationContext);

    return (
        <div>
            <h2>Locations</h2>
            <ul>
                {eventLocations.map(eventLocation => (
                    <li key={eventLocation._id}>
                        {eventLocation.CZ_NAME} - {eventLocation.EVENT_TYPE}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventLocationList;