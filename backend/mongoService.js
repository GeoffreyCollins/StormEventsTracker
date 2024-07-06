const {  MongoClient } = require('mongodb');
require('dotenv').config();

// Connection
const url = process.env.MONGO_URI;
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

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
        const options = {
        projection: { _id: 0, BEGIN_DATE_TIME: 1, EVENT_TYPE: 1 },
        };
        
        console.log(`Querying database with state: ${state}`);

        // Find documents
        const cursor = collection.find(query, options);
        const results = await cursor.toArray();

        if (results.length === 0) {
            console.log('No documents found');
        } else {
            console.log(`Found ${results.length} documents`);
        }

        return results;
    } catch (err) {
        console.error('Error:', err);
        throw err;
    } finally {
        await client.close();
    }
}

module.exports = { getWeatherData };