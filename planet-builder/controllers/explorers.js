const Explorer = require('../models/explorer');
const Planet = require('../models/planet');

async function newExplorer(req, res) {
  const explorers = await Explorer.find({}).sort('name');
  res.render('explorers/new', { explorers });
}

async function create(req, res) {
  try {
    await Explorer.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/explorers/new');
}

const addToExplorers = async(req, res) => {
  try {
    //find the movie that I want to add the performers to 
    const planet = await Planet.findById(req.params.id);
    //added the id of the performer I selected to the cast field on the movie document
    planet.explorers.push(req.body.explorerId);
    //save the changes made to the movie
    await planet.save()
    //redirect to the show page for the movie
    res.redirect(`/planets/${planet._id}`);
  } catch(error) {
    console.log(error);
    res.redirect('/planets');
  } 
}

module.exports = {
  new: newExplorer,
  create,
  addToExplorers
};
