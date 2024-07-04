const {  MongoClient } = require('mongodb');

// Connection
const url = process.env.MONGO_URI;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

// Database and Collection
const dbName = 'StormDB';
const collectionName = 'Details';

async function getWeatherData(state) {
    try {
        await client.connect();
        console.log('Connected to the database');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Query
        const query = { STATE: state};

        // Projection
        const projection = { _id: 0, BEGIN_DATE_TIME: 1, EVENT_TYPE: 1, DAMAGE_PROPERTY: 1, INJURIES_DIRECT: 1, DEATHS_DIRECT: 1 };

        // Sort
        const sort = { BEGIN_DATE_TIME: 1 };

        // Find documents
        const cursor = collection.find(query).project(projection).sort(sort);
        const results = await cursor.toArray();

        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err;
    } finally {
        await client.close();
    }
}

module.exports = { getWeatherData };