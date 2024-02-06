const mongoose = require("mongoose")
const Schema = mongoose.Schema

const explorerScema = new Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Explorer", explorerScema)
