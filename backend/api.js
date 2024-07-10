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

app.get('/api/storm-events', async (req, res) => {
    const { state, year } = req.query;
    console.log('Received request with state:', state, 'and year:', year);

    let query = { STATE: state };
    if (year) {
        query.YEAR = parseInt(year, 10);
    }

    console.log('Constructed query:', query);

    try {
        const events = await StormEvent.find(query);
        console.log('Events found:', events.length);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});