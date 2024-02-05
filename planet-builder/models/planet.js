const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema({
  name: { type: String, require: true },
  color: { type: String, require: true },
  poisonous: { type: Boolean, require: true }
})

const planetSchema = new Schema({
  name: String,
  climate: String,
  population: Number,
  plants: [plantSchema]
})

module.exports = mongoose.model('Planet', planetSchema)
