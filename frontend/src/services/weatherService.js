import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchWeather = async (state) => {
    const response = await axios.get(`${API_URL}/weather`, {
        params: { state }
    });
    return response.data;
};