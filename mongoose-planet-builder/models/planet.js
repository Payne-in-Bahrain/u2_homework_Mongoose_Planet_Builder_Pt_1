const mongoose = require('mongoose')

// 1. define the schema

// 2. compile the schema into a model

// 3. export model

const Schema = mongoose.Schema

const planetSchema = new Schema(
  {
    name: String,
    numberofmoons: {type: Number, default: 2001},
    fauna: [String],
    populated: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', planetSchema)
