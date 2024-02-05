const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planetSchema = new Schema({
    name: {type:String ,required:true},
    climate: {type:String ,required:true, enum:["Oceanic","Tropical","Arctic","Desert","Rainforest"] ,default:"Rainforest"},
    population: {type:Number ,required:true,min:0 ,max:999999}
  },{
    timestamps: true
  })


  module.exports = mongoose.model('Planet',planetSchema)