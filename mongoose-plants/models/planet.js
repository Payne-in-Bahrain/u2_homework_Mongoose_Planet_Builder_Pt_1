const mongoose = require('mongoose');

const Schema = mongoose.Schema;
	
const planetSchema = new Schema({
    name: { type: String,
    required: true },
    climate: {type: String, 
        required: true,
        default: 'Desert',
        enum: ['Oceanic', 'Tropical', 'Arctic', 'Desert', 'Rainforest'] },
    population: {
    type: Number, 
    required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Planet', planetSchema);