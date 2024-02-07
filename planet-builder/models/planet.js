const mongoose = require("mongoose")
const Schema = mongoose.Schema

const plantSchema = new Schema({
  name: String,
  color: String,
  poisonous: Boolean,
})

const planetSchema = new Schema({
  name: String,
  climate: {
    type: String,
    required: true,
    enum: ["Oceanic", "Tropical", "Desert", "Rainforest"],
  },
  population: Number,
  plants: [plantSchema],
})

module.exports = mongoose.model("planet", planetSchema)
