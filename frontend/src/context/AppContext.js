import React, { createContext, useState } from 'react';

export const AppContext = createContext(); // Create a new context

export const AppProvider = ({ children }) => { // Define AppProvider component
    const [events, setEvents] = useState([]);

    return (
        <AppContext.Provider value={{ events, setEvents }}> {/* Provide the events state and setEvents function */}
            {children}
        </AppContext.Provider>
    );
};