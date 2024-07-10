import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Define the API URL

export const fetchWeather = async (state) => {
    const response = await axios.get(`${API_URL}/weather`, { // Fetch weather events from the backend
        params: { state }
    });
    return response.data;
};