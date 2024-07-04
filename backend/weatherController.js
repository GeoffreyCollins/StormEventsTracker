const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI;

router.get('/weather', async (req, res) => {
    const { city } = req.query;

    try {
        const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});
        await client.connect();
        const db = client.db('StormDB');
        const data = await db.collection('Locations').find({ city }).toArray();
        res.json(data);
        client.close();
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

module.exports = router;