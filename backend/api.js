require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());

const url = process.env.MONGO_URI;
const dbName = 'StormDB';
let db;

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
        console.log('Connected to MongoDB');
        db = client.db(dbName);
    })
    .catch(error => console.error('Error connecting to MongoDB:', error));

app.get('/weather', async (req, res) => {
    const state = req.query.state;

    if (!state) {
        return res.status(400).send('State is required');
    }

    try {
        const collection = db.collection('Details');
        const data = await collection.find({ STATE: state }).toArray();
        res.json(data);
    } catch (err) {
        console.error('Error getting data:', err);
        res.status(500).send('Internal Server Error');
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});