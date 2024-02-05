const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enviromentSchema = new Schema({
  enviromentType: { type: String, required: true },
  weather: { type: String, required: true },
  vegetation: {
    type: Boolean,
    required: true,
    enum: [true, false],
    default: false
  },
  wildlife: { type: Number, min: 5, max: 10000 }
})

const planetSchema = new Schema({
  planetName: { type: String, required: true },
  civilization: { type: String, required: true },
  planetRadius: { type: Number, min: 100, max: 20000 },
  enviroment: [enviromentSchema]
})

module.exports = mongoose.model('Planet', planetSchema)
