import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { FatalityProvider } from './context/FatalityContext';
import { LocationProvider } from './context/LocationContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppProvider>
      <EventProvider>
        <FatalityProvider>
          <LocationProvider>
            <Routes />
          </LocationProvider>
        </FatalityProvider>
      </EventProvider>
    </AppProvider>
  </React.StrictMode>,
);

reportWebVitals();