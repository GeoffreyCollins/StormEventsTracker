const express = require('express');
const cors = require('cors');
const api = require('./api'); // Assuming api.js is in the same directory

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', api);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});