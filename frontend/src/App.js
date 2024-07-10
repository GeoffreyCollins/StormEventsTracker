import React from 'react';
import { AppProvider } from './context/AppContext';
import WeatherForm from './components/WeatherForm';
import WeatherChart from './components/WeatherChart';
import WeatherData from './components/WeatherData';

function App() { // Define App component
    return (
        <AppProvider>
            <div className="App">
                <h1>Storm Event Counter</h1> {/* Render the title */}
                <WeatherForm /> {/* Render the form */}
                <WeatherData /> {/* Render the data */}
                <WeatherChart /> {/* Render the chart */}
            </div>
        </AppProvider>
    );
}

export default App;