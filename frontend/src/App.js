import React from 'react';
import { AppProvider } from './context/AppContext';
import WeatherForm from './components/WeatherForm';
import WeatherChart from './components/WeatherChart';
import WeatherData from './components/WeatherData';

function App() {
    return (
        <AppProvider>
            <div className="App">
                <h1>Storm Event Counter</h1>
                <WeatherForm />
                <WeatherData />
                <WeatherChart />
            </div>
        </AppProvider>
    );
}

export default App;