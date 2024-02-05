const mongoose = require('mongoose')
const Schema = mongoose.Schema
const plantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  poisonous: {
    type: String,
    required: true,
    enum: ['true', 'false']
  }
})
const planetSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    climate: {
      type: String,
      required: true,
      enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest'],
      default: 'Desert'
    },
    population: {
      type: Number,
      required: true,
      min: 0,
      max: 9999999
    },
    plants: [plantSchema]
  },
  { timestamps: true }
)
module.exports = mongoose.model('Planet', planetSchema)
//{
//   type: String,
//   required: true,
//   enum: ['G', 'PG', 'PG-13', 'R']
// },
