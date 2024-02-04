const mongoose = require("mongoose")
const Schema = mongoose.Schema

const planetSchema = new Schema({
  name: String,
  climate: {
    type: String,
    required: true,
    enum: ["Oceanic", "Tropical", "Desert", "Rainforest"],
  },
  population: Number,
})

module.exports = mongoose.model("planet", planetSchema)
