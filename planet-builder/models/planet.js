const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    plant: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    poisonous: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
)

const planetSchema = new Schema(
  {
    name: String,
    climate: { type: String, default: 'Desert' },
    population: Number,
    Possible_alien_life: Boolean,
    plant: [plantSchema],
    explorers:[{ type: Schema.Types.ObjectId, ref: 'Explorer' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', planetSchema)
