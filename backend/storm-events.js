const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the WeatherEvent schema and model
const WeatherEventSchema = new mongoose.Schema({ // Define the WeatherEvent schema
  EVENT_ID: Number,
  STATE: String,
  YEAR: String,
  MONTH_NAME: String,
  EVENT_TYPE: String,
  CZ_NAME: String,
});

const WeatherEvent = mongoose.model('WeatherEvent', WeatherEventSchema); // Create the WeatherEvent model

// Endpoint to get storm events count by state and optionally by year
router.get('/storm-events', async (req, res) => {
  const { state, year } = req.query; // Extract query parameters

  if (!state) {
    return res.status(400).json({ error: 'State is required' }); // Return an error if state is not provided
  }

  const query = { STATE : state.toUpperCase() }; // Construct query object, convert state to uppercase

  if (year) {
    query.YEAR = parseInt(year, 10); // Add year to query if provided, convert to integer
  }

  try { // Fetch events from MongoDB
    const events = await WeatherEvent.find(query); // Find events matching query
    res.json(events); // Respond with events in JSON format
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;