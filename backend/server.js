const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', api); // Mount the API at /api

const PORT = process.env.PORT || 3001; // Use the PORT environment variable if available, otherwise use port 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});