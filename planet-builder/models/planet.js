const mongoose = require("mongoose")
const Schema = mongoose.Schema

const animalsSchema = new Schema({
  name: String,
  color: String,
  poisonous: { type: Boolean },
})

const planetSchema = new Schema({
  name: String,
  climate: {
    type: String,
    required: true,
    enum: ["Oceanic", "Tropical", "Desert", "Rainforest"],
  },
  population: Number,
  animals: [animalsSchema],
})

module.exports = mongoose.model("planet", planetSchema)
