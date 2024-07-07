import React, { useState } from 'react';
import axios from 'axios';
import WeatherChart from './WeatherChart';

const WeatherData = () => {
    const [state, setState] = useState(''); // State to store the user input
    const [data, setData] = useState(null); // State to store the weather data

    const fetchWeather = async () => { // Fetch weather data from the backend
        try {
            const response = await axios.get(`http://localhost:5001/weather?state=${state}`);
            setData(response.data);
        } catch (error) { 
            console.error("Error fetching data: ", error);
        }
    };

    const handleSubmit = (event) => { // Handle form submission
        event.preventDefault();
        fetchWeather();
    };

    return ( // Render the form and the WeatherChart component
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={state} 
                    onChange={(e) => setState(e.target.value)} 
                    placeholder="Enter state"
                />
                <button type="submit">Get Weather Data</button>
            </form>
            {data && <WeatherChart data={data} />}
        </div>
    );
};

export default WeatherData;