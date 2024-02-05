const mongoose = require("mongoose")

const Schema = mongoose.Schema
const plantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    climate: {
      type: String,
      enum: ["Oceanic", "Tropical", "Arctic", "Desert", "Rainforest"],
      default: "Rainforest",
    },
    population: { type: Number, min: 0, max: 9999999 },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Planet", plantSchema)
