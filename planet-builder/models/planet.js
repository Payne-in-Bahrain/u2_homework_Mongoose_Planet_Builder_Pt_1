const mongoose = require("mongoose")
const Schema = mongoose.Schema

const planetScema = new Schema(
  {
    name: { type: String, require: true },
    climate: {
      type: String,
      require: true,
      enum: ["Oceanic", "Tropical", "Arctic", "Desert", "Rainforest"],
      default: "Desert",
    },
    population: {
      type: Number,
      require: true,
      min: 0,
      max: 9999999,
    },
    hasWater: { type: Boolean },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Plants", planetScema)
