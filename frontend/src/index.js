import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from './routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { EventProvider } from './context/EventContext';
import { FatalityProvider } from './context/FatalityContext';
import { EventLocationProvider } from './context/EventLocationContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <EventProvider>
        <FatalityProvider>
          <EventLocationProvider>
            <Routes />
          </EventLocationProvider>
        </FatalityProvider>
      </EventProvider>
  </React.StrictMode>,
);

reportWebVitals();