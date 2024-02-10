const mongoose = require("mongoose")
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

// const planetSchema = new Schema(
//   {
//     name: { type: String, require: true },
//     climate: {
//       type: String,
//       enum: ["Oceanic", "Tropical", "Arctic", "Desert", "Rainforest"],
//       default: 'Desert'
//     },
//     poisonous: { type: Boolean, require: true, enum: [true, false] },
//   },
//   {
//     timestamps: true,
//   }
// )

const plantsSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Planet", plantsSchema)
