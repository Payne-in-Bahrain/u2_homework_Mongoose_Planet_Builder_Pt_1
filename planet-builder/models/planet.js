const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vegatationSchema = new Schema({
  vegName: {type: String, default: "cabbage"},
  color: {type: String, default: "Green"},
  poisonous: {type: Boolean, default: true, enum: [true, false]}
}, {
  timestamps: true
});

const planetSchema = new Schema({
  name: {type: String, default: "Uncharted Sector"},
  climate: {type: String, enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest', "Unknown"], default: "Unknown"},
  population: {type: Number, min: 0, max: 9999999, default: 3000000},
  plants: [vegatationSchema],
  crew: {type: Schema.Types.ObjectId, ref: "Explorer"}
}, {
  timestamps: true
});

module.exports = mongoose.model("Planet", planetSchema);