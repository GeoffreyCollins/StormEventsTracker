const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const weatherController = require('./weatherController');

app.use('/api', weatherController);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});