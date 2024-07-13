const mongoose = require('mongoose');

const FatalitySchema = new mongoose.Schema({
    FAT_YEARMONTH: String,
    FAT_DAY: String,
    FAT_TIME: String,
    FATALITY_ID: String,
    EVENT_ID: String,
    FATALITY_TYPE: String,
    FATALITY_DATE: String,
    FATALITY_AGE: String,
    FATALITY_SEX: String,
    FATALITY_LOCATION: String,
    EVENT_YEARMONTH: String,
}, { collection: 'Fatalities'});

const Fatality = mongoose.model('Fatality', FatalitySchema);

module.exports = Fatality;