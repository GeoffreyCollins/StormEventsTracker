import React, { createContext, useState } from 'react';

export const FatalityContext = createContext();

export const FatalityProvider = ({ children }) => {
    const [ fatalities, setFatalities ] = useState([]);

    return (
        <FatalityContext.Provider value={{ fatalities, setFatalities }}>
            {children}
        </FatalityContext.Provider>
    );
};