// models/planet.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const animalsSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      min: 1,
      default: 1
    }
  },
  {
    timestamps: true
  }
)
const planetSchema = new Schema(
  {
    name: { type: String, required: true },
    climate: {
      type: String,
      required: true
    },
    population: { type: Number, required: true },
    size: Number,
    animals: [animalsSchema],
    explorers: [{ type: Schema.Types.ObjectId, ref: 'explorer' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', planetSchema)
