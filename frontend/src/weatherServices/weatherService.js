import axios from 'axios';

const API_URL = 'http://localhost:5001/weather';

const fetchWeather = async (city) => {
    const response = await axios.get(`${API_URL}?city=${city}`);
    return response.data;
};

export { fetchWeather };