const Explorer = require('../models/explorer');
const Planet = require('../models/planet');

async function newExplorer(req, res) {
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

const addToExplorer = async (req,res) =>{
  try{
    const planet = await Planet.findById(req.params.id)
    planet.explorers.push(req.body.explorerId)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (err){
    console.log(err)
    res.redirect(`/planets`)
  }
}

module.exports = {
  new: newExplorer,
  create,
  addToExplorer
};