const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const explorerSchema = new Schema({
  name: {
    name: String,
    age: Number,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Explorer', explorerSchema);