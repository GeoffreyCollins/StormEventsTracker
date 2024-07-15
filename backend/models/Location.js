const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    YEARMONTH: String,
    EPISODE_ID: String,
    EVENT_ID: String,
    LOCATION_INDEX: String,
    RANGE: String,
    AZIMUTH: String,
    LOCATION: String,
    LATITUDE: String,
    LONGITUDE: String,
    LAT2: String,
    LON2: String,
    CZ_NAME: String,
    CZ_TYPE: String,
}, { collection: 'Locations' });

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;