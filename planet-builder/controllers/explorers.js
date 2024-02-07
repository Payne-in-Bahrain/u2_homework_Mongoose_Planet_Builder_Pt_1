const Planet = require('../models/planet')
const Explorer = require('../models/explorer.js')

const newExplorer = async (req, res) => {
  const explorers = await Explorer.find({}).sort('name')
  res.render('explorers/new', { title: 'Add Explorer', explorers })
}

const create = async (req, res) => {
  try {
    await Explorer.create(req.body)
  } catch (error) {
    console.log(error)
  }
  res.redirect('/explorers/new')
}

const addToPlanet = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id)
    planet.explorers.push(req.body.explorerId)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/planets')
  }
}

module.exports = {
  newExplorer,
  create,
  addToPlanet
}
