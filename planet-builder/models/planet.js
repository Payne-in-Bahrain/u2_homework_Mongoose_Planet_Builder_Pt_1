const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planetSchema = new Schema({
  name: String,
  climate: String,
  population: Number
})

module.exports = mongoose.model('Planet', planetSchema)
