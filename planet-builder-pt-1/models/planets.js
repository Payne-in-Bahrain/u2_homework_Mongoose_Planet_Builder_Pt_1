const mongoose = require("mongoose")
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const planetSchema = new Schema(
  {
    name: String,
    climate: String,
    population: Number,
  }
  // ,
  // {
  //   timestamps: true,
  // }
)
module.exports = mongoose.model("Planet", planetSchema)
