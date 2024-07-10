const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the WeatherEvent schema and model
const WeatherEventSchema = new mongoose.Schema({
  EVENT_ID: Number,
  STATE: String,
  YEAR: String,
  MONTH_NAME: String,
  EVENT_TYPE: String,
  CZ_NAME: String,
});

const WeatherEvent = mongoose.model('WeatherEvent', WeatherEventSchema);

// Endpoint to get storm events count by state and optionally by year
router.get('/storm-events', async (req, res) => {
  const { state, year } = req.query;

  if (!state) {
    return res.status(400).json({ error: 'State is required' });
  }

  const query = { STATE : state.toUpperCase() };

  if (year) {
    query.YEAR = parseInt(year, 10);
  }

  try {
    const events = await WeatherEvent.find(query).limit(10); // Limit to 10 events for simplicity
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;