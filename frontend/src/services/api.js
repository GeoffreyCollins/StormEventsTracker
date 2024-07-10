import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Define the API base URL

export const severeWeather = async (year) => { // Define the severeWeather function
    try {
        const response = await axios.get(`${API_BASE_URL}/api/storm-events`, { // Fetch storm events from the backend
            params: { year }
        });
        return response.data; /// Return the response data
    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }
};