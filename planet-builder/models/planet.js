const mongoose = require('mongoose')

const Schema = mongoose.Schema

const planetSchema = new Schema({
  name: { type: String, required: true },
  climate: {
    type: String,
    enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest']
  },
  population: { type: Number, required: true, min: 0, max: 9999999 }
})

module.exports = mongoose.model('Planet', planetSchema)
