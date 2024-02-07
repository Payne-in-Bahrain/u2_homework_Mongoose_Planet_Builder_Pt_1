const mongoose = require('mongoose')
const Schema = mongoose.Schema

const explorerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    age: {
      type: Number,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Explorer', explorerSchema)
