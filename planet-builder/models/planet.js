const mongoose = require('mongoose')

const Schema = mongoose.Schema

const planetSchema = new Schema(
  {
    name: String,
    climate: { type: String, default: "Desert" },
    population: Number,
    Possible_alien_life: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', planetSchema)
