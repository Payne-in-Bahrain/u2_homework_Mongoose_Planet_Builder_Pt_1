const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    poisonous: {
        type: Boolean,
        required: true
    }
  }, {
    timestamps: true
  });
	
const planetSchema = new Schema({
    name: { 
        type: String,
        required: true },
    climate: {
        type: String, 
        required: true,
        default: 'Desert',
        enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest'] },
    population: {
        type: Number, 
        required: true,
        min: 0,
        max: 9999999
    },
    plants: [plantSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Planet', planetSchema);