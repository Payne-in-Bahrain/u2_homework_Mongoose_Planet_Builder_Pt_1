const mongoose = require('mongoose')
const Schema = mongoose.Schema

const palentSchema = new Schema(
  {
    name: String,
    climate: String,
    population: Number
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Palent', palentSchema)
