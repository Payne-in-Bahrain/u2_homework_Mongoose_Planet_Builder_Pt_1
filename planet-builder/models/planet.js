const mongoose = require("mongoose")
const Schema = mongoose.Schema

const plantScema = new Schema(
  {
    name: { type: String, require: true },
    color: { type: String, require: true },
    poisonous: { type: Boolean, require: true, enum: [true, false] },
  },
  {
    timestamps: true,
  }
)

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
    plants: [plantScema],
    explorers: [{ type: Schema.Types.ObjectId, ref: "Explorer" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Plants", planetScema)
