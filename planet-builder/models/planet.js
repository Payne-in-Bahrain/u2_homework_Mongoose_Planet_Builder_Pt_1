const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: { type: String, require: true },
    color: { type: String, require: true },
    poisonous: { type: Boolean, require: true }
  },
  {
    timestamps: true
  }
)

const planetSchema = new Schema(
  {
    name: String,
    climate: String,
    population: Number,
    plants: [plantSchema],
    explorers: [{ type: Schema.Types.ObjectId, ref: 'Explorer' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', planetSchema)
