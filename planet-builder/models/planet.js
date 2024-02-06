const mongoose = require("mongoose")

const Schema = mongoose.Schema

const plantSchema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: true },
    poisonous: { type: Boolean, required: true, enum: ["yes", "no"] },
  },
  {
    timestamps: true,
  }
)

const planteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    climate: {
      type: String,
      enum: ["Oceanic", "Tropical", "Arctic", "Desert", "Rainforest"],
      default: "Rainforest",
    },
    population: { type: Number, min: 0, max: 9999999 },
    plants: [plantSchema],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Planet", planteSchema)
