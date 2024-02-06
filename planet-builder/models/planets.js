const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plantSchema  = new Schema({
name : {type:String ,required:true} ,
color :{type:String ,required:true} ,
poisonous : Boolean
},{
  timestamps: true

})


const planetSchema = new Schema({
    name: {type:String ,required:true},
    climate: {type:String ,required:true, enum:["Oceanic","Tropical","Arctic","Desert","Rainforest"] ,default:"Rainforest"},
    population: {type:Number ,required:true,min:0 ,max:999999},
    plant: [plantSchema],
    explorer: [{ type: Schema.Types.ObjectId, ref: 'Explorer' }]
  },{
    timestamps: true
  })


  module.exports = mongoose.model('Planet',planetSchema)