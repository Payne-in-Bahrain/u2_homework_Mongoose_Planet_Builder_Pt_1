const mongoose = require('mongoose')

// 1. define the schema

// 2. compile the schema into a model

// 3. export model

const Schema = mongoose.Schema

const moonSchema = new Schema({
  moonname: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  civs: {
    type: Number,
    min: 0,
    max: 9,
    default: 0
  }
}, {
  timestamps: true
});

const planetSchema = new Schema(
  {
    name: String,
    numberofmoons: { type: Number, default: 5 },
    fauna: [String],
    populated: Boolean,
    moons: [moonSchema],
    astro: [{ type: Schema.Types.ObjectId, ref: 'Explorer' }],
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planet', planetSchema)
