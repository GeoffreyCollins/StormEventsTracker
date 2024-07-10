import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [events, setEvents] = useState([]);

    return (
        <AppContext.Provider value={{ events, setEvents }}>
            {children}
        </AppContext.Provider>
    );
};