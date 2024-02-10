const mongoose = require("mongoose")
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const plantsSchema = new Schema(
  {
    name: { type: String, require: true },
    color: {
      type: String,
      require: true,
    },
    poisonous: { type: Boolean, enum: [true, false] },
  },
  {
    timestamps: true,
  }
)

const plantSchema = new Schema(
  {
    name: { type: String, require: true },
    climate: {
      type: String,
      enum: ["Oceanic", "Tropical", "Arctic", "Desert", "Rainforest"],
      default: "Desert",
    },

    population: {
      type: Number,
      require: true,
      min: 0,
      max: 9999999,
    },
    plants: [plantsSchema]
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Planet", plantSchema)
