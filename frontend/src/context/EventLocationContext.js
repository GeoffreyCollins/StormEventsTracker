import React, { createContext, useState } from 'react';

export const EventLocationContext = createContext();

export const EventLocationProvider = ({ children }) => {
    const [ eventLocations, setEventLocations ] = useState([]);

    return (
        <EventLocationContext.Provider value={{ eventLocations, setEventLocations }}>
            {children}
        </EventLocationContext.Provider>
    );
};