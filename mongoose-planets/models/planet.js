const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: {
      type: String
    },
    color: {
      type: String
    },
    poisonous: {
      type: Boolean,
      enum: [true, false]
    }
  },
  {
    timestamps: true
  }
)

const palentSchema = new Schema(
  {
    name: String,
    climate: String,
    population: Number,
    plants: [plantSchema],
    explorer: [{ type: Schema.Types.ObjectId, ref: 'Explorer' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Palent', palentSchema)
