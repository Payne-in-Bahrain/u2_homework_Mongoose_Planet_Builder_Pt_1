const mongoose = require('mongoose')
const Schema = mongoose.Schema
const planetSchema = new Schema(
  {
    name: { type: String, required: true },
    climate: { type: String, required: true },
    population: Number,
    size: Number
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Planet', planetSchema)
