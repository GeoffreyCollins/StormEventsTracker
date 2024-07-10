import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

export const severeWeather = async (year) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/storm-events`, {
            params: { year }
        });
        return response.data;
    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }
};