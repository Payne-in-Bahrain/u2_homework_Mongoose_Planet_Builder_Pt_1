const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    poisonous: { type: Boolean, enum: [true, false] }
  },
  {
    timestamps: true
  }
)

const PlanetSchema = new Schema(
  {
    name: { type: String },
    climate: { type: String },
    population: { type: Number },
    plants: [plantSchema],
    explorers: [{ type: Schema.Types.ObjectId, ref: 'Explorer' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', PlanetSchema)
