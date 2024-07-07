const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
if (!uri) {
    throw new Error("MONGO_URI environment variable not defined");
}

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const getWeatherDataByState = async (state, year) => {
    try {
        await client.connect();
        const database = client.db('StormDB');
        const collection = database.collection('Details');

        const matchStage = { STATE: state.toUpperCase() }; // Data in the database is in uppercase, so we need to convert the state to uppercase
        if (year) {
            matchStage.YEAR = parseInt(year); // Add the year filter if it is provided and convert it to an integer
        }

        console.log('Match Stage:', matchStage); // Debugging line, shows the match stage in the console

        const pipeline = [
            { $match: matchStage },
            { $group: {_id: "$MONTH_NAME", eventCount: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ];

        const result = await collection.aggregate(pipeline).toArray();
        console.log('Aggregation Result:', result); // Debugging line, shows the result in the console
        return result.map(item => ({ month: item._id, eventCount: item.eventCount }));
    } catch (error) {
        console.error('Error getting weather data: ', error);
        return [];
    } finally {
        await client.close(); // Close the connection to the database
    }
};

module.exports = { getWeatherDataByState };