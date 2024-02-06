const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

const newExplorer = async (req, res) => {
  const explorers = await Explorer.find({})
  res.render('explorers/new', { title: 'Add Explorer', explorers })
}
const create = async (req, res) => {
  try {
    await Explorer.create(req.body)
  } catch (error) {
    console.log(error)
  }
  res.redirect('explorers')
}

const allExplorers = async (req, res) => {
  try {
    const explorers = await Explorer.find({})
    res.render('explorers/index.ejs', { explorers, title: 'Add new explorer' })
  } catch (error) {
    console.log(error)
  }
}

const addToPlanet = async (req, res) => {
  console.log(req.params)
  try {
    const planet = await Planet.findById(req.params.planetId)
    console.log(planet)
    planet.explorer.push(req.body.explorerId)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/planets`)
  }
}

module.exports = { newExplorer, create, allExplorers, addToPlanet }
