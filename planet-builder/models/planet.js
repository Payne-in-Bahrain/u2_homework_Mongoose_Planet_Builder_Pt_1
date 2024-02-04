//import the Mongoose library
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

// Define the Schema
const planetSchema = new Schema(
// Define the fields and their properties here  
  {
  name: String,
  size: String,
  distanceFromSun: String,
  hasMoons: Boolean,
}, {
  timestamps: true
});
// Compile the Schema into a Model
module.exports = mongoose.model('Planet', planetSchema );