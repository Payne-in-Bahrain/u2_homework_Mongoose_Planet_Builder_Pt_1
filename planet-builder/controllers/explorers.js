const Planet = require('../models/planet')
const Explorer = require('../models/explorer')

async function newExplorer(req, res) {
  const explorers = await Explorer.find({}).sort('name')
  res.render('explorers/new', { title: 'Add Explorer', explorers })
}

async function create(req, res) {
  try {
    await Explorer.create(req.body)
  } catch (error) {
    console.log(error)
  }
  res.redirect('/explorers/new')
}
async function showExplorers(req, res) {
  try {
    const explorers = await Explorer.find({}).sort('name')
    res.render('explorers/show', { title: 'All Explorers', explorers })
  } catch (error) {
    console.log(error)
  }
}
async function addToPlanet(req, res) {
  try {
    console.log(`req params ${req.params.planetId}`)
    const planet = await Planet.findById(req.params.planetId)
    console.log(planet)
    console.log('planet up')
    planet.explorers.push(req.body.explorerId)
    console.log(req.body.explorerId)
    console.log('req.body.explorerId up')
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/planets')
  }
}
module.exports = { new: newExplorer, create, addToPlanet, showExplorers }
