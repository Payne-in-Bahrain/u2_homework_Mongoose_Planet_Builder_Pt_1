const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: {type:String ,required:true},
    climate: {type:String ,required:true, enum:["Oceanic","Tropical","Arctic","Desert","Rainforest"] ,default:"Rainforest"},
    population: {type:Number ,required:true,minimum:0 ,maximum:99.99}
  },{
    timestamps: true
  })


  module.exports = mongoose.model('Planet',planetSchema)