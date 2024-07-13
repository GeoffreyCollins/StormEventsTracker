const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

// Define the Fatality schema and model
const FatalitySchema = new mongoose.Schema({
    FAT_YEARMONTH: String,
    FAT_DAY: String,
    FAT_TIME: String,
    FATALITY_ID: String,
    EVENT_ID: String,
    FATALITY_TYPE: String,
    FATALITY_DATE: String,
    FATALITY_AGE: String,
    FATALITY_SEX: String,
    FATALITY_LOCATION: String,
    EVENT_YEARMONTH: String,
}, { collection: 'Fatalities' });

const Fatality = mongoose.model('Fatality', FatalitySchema);

// Define the Location schema and model
const LocationSchema = new mongoose.Schema({
    YEARMONTH: Number,
    EPISODE_ID: Number,
    EVENT_ID: Number,
    LOCATION_INDEX: Number,
    RANGE: String,
    AZIMUTH: String,
    LOCATION: String,
    LATITUDE: String,
    LONGITUDE: String,
    LAT2: String,
    LON2: String,
});

const Location = mongoose.model('Location', LocationSchema);

// Endpoint to get storm events count by state and optionally by year
app.get('/api/storm-events', async (req, res) => {
    const { state, year } = req.query;
    console.log('Received request with state:', state, 'and year:', year);

    const query = { STATE: state.toUpperCase() };
    if (year) {
        query.YEAR = parseInt(year, 10);
    }

    console.log('Constructed query:', query);

    try {
        const events = await WeatherEvent.find(query);
        console.log('Events found:', events.length);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Endpoint to get fatality info
app.get('/api/fatalities', async (req, res) => {
    const { year } = req.query;
    console.log('Received request with year:', year);

    if (!year) {
        return res.status(400).json({ error: 'Year is required' });
    }

    const yearString = year.toString();

    try {
        // Aggregate fatalities by year and month
        const fatalities = await Fatality.aggregate([
            {
                $match: { // Filter by year, using $expr to compare strings
                    $expr: { 
                        $eq: [{ $substr: ['$FAT_YEARMONTH', 0, 4] }, yearString] // Extract year from FAT_YEARMONTH
                    }
                }
            },
            {
                $group: { // Group by year and month
                    _id: { // Create a composite _id field
                        year: { $substr: ["$FAT_YEARMONTH", 0, 4] }, // Extract year from FAT_YEARMONTH, starting at index 0 and taking 4 characters
                        month: { $substr: ["$FAT_YEARMONTH", 4, 2] } // Extract month from FAT_YEARMONTH, starting at index 4 and taking 2 characters
                    },
                    count: { $sum: 1 }
                }
            },
            { $sort: { "_id.year": 1, "_id.month": 1 } }
        ]);

        console.log('Fatality aggregation result:', fatalities);
        res.json(fatalities);
    } catch (error) {
        console.error('Error fetching fatalities:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});