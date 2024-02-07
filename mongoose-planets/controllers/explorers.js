const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

const newExplorers = async (req, res) => {
  const explorers = await Explorer.find({})
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

const index = async (req, res) => {
  const explorers = await Explorer.find({})
  res.render('explorers/new', { title: 'All Explorers', explorers })
}

const addToPlanet = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id)
    planet.explorer.push(req.body.explorerId)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  newExplorers,
  create,
  index,
  addToPlanet
}
