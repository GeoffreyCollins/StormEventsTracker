const express = require('express');
const getWeatherData = require('./mongoService');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.get('/weather', async (req, res) => {
    const state = req.query.state;
    if (!state) {
        return res.status(400).send('State is required');
    }

    try {
        const data = await getWeatherData(state);
        res.json(data);
    } catch (err) {
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});