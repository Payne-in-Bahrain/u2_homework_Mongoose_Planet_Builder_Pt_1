const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planetSchema = new Schema({
  planetName: { type: String, required: true },
  civilization: { type: String, required: true },
  planetRadius: { type: Number, min: 100, max: 20000 }
})

module.exports = mongoose.model('Planet', planetSchema)
