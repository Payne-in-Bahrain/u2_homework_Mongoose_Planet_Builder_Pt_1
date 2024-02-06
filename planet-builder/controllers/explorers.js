const Explorer = require('../models/explorer');
const Planet = require('../models/planet');



async function newExplorer(req, res) {
  //Sort performers by their name
  const explorers = await Explorer.find({}).sort('name');
  res.render('explorers/new', { title: 'Add Explorer', explorers });
}

async function create(req, res) {
  try {
    await Explorer.create(req.body);
  } catch (err) {
    console.log(err);
  }
  res.redirect('/explorers/new');
}

const addToTeam = async(req, res) {
  try {
    await Planet.findById(req.params.id);
    planet.team.push(req.body.preformerId);
    await planet.save()
    res.redirect(`/planets/${planet._id}`);
  } catch(erro) {
   console.log(erro);
   res.redirect('/planets');
  }
  
}


module.exports = {
  newExplorer,
  create,
  addToTeam
};