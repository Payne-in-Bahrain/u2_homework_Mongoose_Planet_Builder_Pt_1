const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planetSchema = new Schema({
  name: {type: String, default: "Uncharted Sector"},
  climate: {type: String, enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest', "Unknown"], default: "Unknown"},
  population: {type: Number, min: 0, max: 9999999, default: 3000000}
}, {
  timestamps: true
});

module.exports = mongoose.model("Planet", planetSchema);