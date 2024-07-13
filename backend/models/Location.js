const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    YEARMONTH: Number,
    EPISODE_ID: Number,
    EVENT_ID: Number,
    LOCATION_INDEX: Number,
    RANGE: String,
    AZIMUTH: String,
    LOCATION: String,
    LATITUDE: String,
    LONGITUDE: String,
    LAT2: String,
    LON2: String,
}, { collection: 'Locations' });

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;