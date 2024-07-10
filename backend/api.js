const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const StormEvent = require('./models/StormEvent');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

console.log('Connecting to MongoDB...');
mongoose.connect('mongodb://localhost:27017/NaturalDisasters', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/api/storm-events', async (req, res) => { // GET /api/storm-events
    const { state, year } = req.query; // Extract query parameters
    console.log('Received request with state:', state, 'and year:', year); // Log query parameters

    let query = { STATE: state }; // Construct query object
    if (year) {
        query.YEAR = parseInt(year, 10);
    }

    console.log('Constructed query:', query); // Log constructed query

    try { // Fetch events from MongoDB
        const events = await StormEvent.find(query); // Find events matching query
        console.log('Events found:', events.length);
        res.json(events); // Respond with events
    } catch (error) { // Handle errors
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});