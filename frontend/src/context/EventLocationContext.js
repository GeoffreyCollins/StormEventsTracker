import React, { createContext, useState } from 'react';

export const EventLocationContext = createContext();

export const EventLocationProvider = ({ children }) => {
    const [eventLocations, setEventLocations] = useState([]);

    const setEventLocationsContext = (locations) => {
        console.log('Setting event locations:', locations);
        setEventLocations(locations);
    };

    return (
        <EventLocationContext.Provider value={{ eventLocations, setEventLocationsContext }}>
            {children}
        </EventLocationContext.Provider>
    );
};