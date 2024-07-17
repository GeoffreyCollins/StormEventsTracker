const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

StormEventSchema = require('./models/StormEvent');
FatalitySchema = require('./models/Fatality');
LocationSchema = require('./models/Location');
EventLocationSchema = require('./models/EventLocation');

console.log('Connecting to MongoDB...');
mongoose.connect('mongodb://localhost:27017/NaturalDisasters', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/api/storm-events', async (req, res) => {
    const { state, year } = req.query;
    console.log('Received request with state:', state, 'and year:', year);

    const query = { STATE: state.toUpperCase() };
    if (year) {
        query.YEAR = parseInt(year, 10);
    }

    console.log('Constructed query:', query);

    try {
        const events = await StormEventSchema.find(query);
        console.log('Events found:', events.length);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/fatalities', async (req, res) => {
    const { year } = req.query;
    console.log('Received request with year:', year);

    if (!year) {
        return res.status(400).json({ error: 'Year is required' });
    }

    const yearString = year.toString();

    try {
        const fatalities = await FatalitySchema.aggregate([
            {
                $match: {
                    $expr: { 
                        $eq: [{ $substr: ['$FAT_YEARMONTH', 0, 4] }, yearString]
                    }
                }
            },
            {
                $group: {
                    _id: {
                        year: { $substr: ["$FAT_YEARMONTH", 0, 4] },
                        month: { $substr: ["$FAT_YEARMONTH", 4, 2] }
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

app.get('/api/event-locations', async (req, res) => {
    const year = parseInt(req.query.year, 10);
    console.log('Received request with year:', year);
    try {
        const eventsPerState = await EventLocationSchema.aggregate([
        {
            $match: {
                YEAR: year,
            }
        },
        {
            $group: {
                _id: '$STATE',
                count: { $sum: 1 }
            }
        }
        ]);

        console.log('Event locations found:', eventsPerState.length);
        console.log('Event locations:', eventsPerState);
        res.json(eventsPerState);
    } catch (error) {
        console.error('Error fetching event locations:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});