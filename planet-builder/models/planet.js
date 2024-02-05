const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlanetSchema = new Schema(
  {
    name: { type: String },
    climate: { type: String },
    population: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', PlanetSchema)
