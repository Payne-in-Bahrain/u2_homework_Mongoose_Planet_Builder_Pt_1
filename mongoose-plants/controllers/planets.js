const Movie = require('../models/planet');

const newPlanet = (req, res) => {
    let title = "Add new Planet";
	res.render('planets/new', { title });
}

const create = async(req, res) => {

}

const index = async (req, res) => {

}


module.exports = {
    new: newPlanet,
    create,
    index
};