const mongoose = require('mongoose');

const eventLocationSchema = new mongoose.Schema({
    BEGIN_YEARMONTH: Number,
    BEGIN_DAY: Number,
    BEGIN_TIME: Number,
    END_YEARMONTH: Number,
    END_DAY: Number,
    END_TIME: Number,
    EPISODE_ID_x: Number,
    EVENT_ID: Number,
    STATE: String,
    STATE_FIPS: Number,
    YEAR: Number,
    MONTH_NAME: String,
    EVENT_TYPE: String,
    CZ_TYPE: String,
    CZ_FIPS: Number,
    CZ_NAME: String,
    WFO: String,
    BEGIN_DATE_TIME: String,
    CZ_TIMEZONE: String,
    END_DATE_TIME: String,
    INJURIES_DIRECT: Number,
    INJURIES_INDIRECT: Number,
    DEATHS_DIRECT: Number,
    DEATHS_INDIRECT: Number,
    DAMAGE_PROPERTY: String,
    DAMAGE_CROPS: String,
    SOURCE: String,
    MAGNITUDE: Number,
    MAGNITUDE_TYPE: String,
    FLOOD_CAUSE: String,
    CATEGORY: Number,
    TOR_F_SCALE: String,
    TOR_LENGTH: Number,
    TOR_WIDTH: Number,
    TOR_OTHER_WFO: String,
    TOR_OTHER_CZ_STATE: String,
    TOR_OTHER_CZ_FIPS: Number,
    TOR_OTHER_CZ_NAME: String,
    BEGIN_RANGE: Number,
    BEGIN_AZIMUTH: String,
    BEGIN_LOCATION: String,
    END_RANGE: Number,
    END_AZIMUTH: String,
    END_LOCATION: String,
    BEGIN_LAT: Number,
    BEGIN_LON: Number,
    END_LAT: Number,
    END_LON: Number, 
    EPISODE_NARRATIVE: String,
    EVENT_NARRATIVE: String,
    DATA_SOURCE: String,
    YEARMONTH: Number,
    EPISODE_ID_y: Number,
    LOCATION_INDEX: Number,
    RANGE: Number,
    AZIMUTH: String,
    LOCATION: String,
}, { collection: 'EventLocations' });

const EventLocation = mongoose.model('EventLocation', eventLocationSchema);

module.exports = EventLocation;