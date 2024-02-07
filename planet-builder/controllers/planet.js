const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

const index = async (req, res) => {
  const planets = await Planet.find({})
  res.render('planets/index', { title: 'Planets', planets })
}

const show = async (req, res) => {
  const planet = await Planet.findById(req.params.id).populate('explorers')
  const explorersName = planet.explorers.map((explorer) => explorer.name)

  let explorers = await Explorer.find({})
  explorers = explorers.filter((explorer) => {
    if (!explorersName.includes(explorer.name)) {
      return explorer
    }
  })

  res.render('planets/show', {
    title: 'Planet Detail',
    planet,
    explorers,
    plantExplorers: planet.explorers
  })
}

const newPlanet = (req, res) => {
  res.render('planets/new', { title: 'New Planet' })
}

const create = async (req, res) => {
  try {
    const planet = Planet.create(req.body)
    res.redirect('/planets')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  index,
  show,
  new: newPlanet,
  create
}
