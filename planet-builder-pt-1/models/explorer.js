const mongoose = require("mongoose")
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const explorerSchema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("explorer",explorerSchema)
