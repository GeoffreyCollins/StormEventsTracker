const express = require('express');
const cors = require('cors');
const { getWeatherDataByState } = require('./mongoService');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.get('/weather', async (req, res) => {
    const { state } = req.query;
    if (!state) {
        return res.status(400).send('State query parameter is required');
    }
    
    try {
        const data = await getWeatherDataByState(state);
        console.log('API Response Data: ', data); // Debugging line, shows the data in the console and terminal
        res.json(data);
    } catch (error) {
        console.error('Error in /weather route: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
