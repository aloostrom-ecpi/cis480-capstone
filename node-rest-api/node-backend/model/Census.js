const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CensusSchema = new Schema({
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: {type: String},
    resident_count: { type: String },
    census_year: { type: String },
    assessor: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'census'
});

module.exports = mongoose.model('Census', CensusSchema);
