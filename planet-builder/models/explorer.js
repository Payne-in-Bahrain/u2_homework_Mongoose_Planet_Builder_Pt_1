const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const explorerSchema = new Schema({
  name: {type: String},
  age: {type: Number}
}, {
  timestamps: true
});

module.exports = mongoose.model("Explorer", explorerSchema);