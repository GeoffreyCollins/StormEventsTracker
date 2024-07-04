import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../weatherServices/weatherService';
import { Line } from 'react-chartjs-2';

const WeatherData = ({ city }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchWeather(city);
                setData(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data: ', error);
                setLoading(false);
            }
        };
        
        getData();
    }, [city]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (!data.length) {
        return <p>No data available for {city}</p>
    }

    const labels = data.map((item) => item.date);
    const temps = data.map((item) => item.temperature);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Temperature',
                data: temps,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };  

    return (
        <div>
            <h2>Weather data for {city}</h2>
            <Line data={chartData} />
        </div>
    );
};

export default WeatherData;