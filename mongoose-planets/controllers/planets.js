const Planet = require('../models/planet')
const Explorer = require('../models/explorer')

const newPlanet = (req, res) => {
  const title = 'Add Planet'
  res.render('planets/new', { title })
}

const create = async (req, res) => {
  try {
    await Planet.create(req.body)
    res.redirect('/planets/new')
  } catch (error) {
    console.log(error)
    redirect('/planets/new')
  }
}

const index = async (req, res) => {
  try {
    const title = 'All Planets'
    const planets = await Planet.find({})
    res.render('planets/index', { title, planets })
  } catch (error) {
    console.log(error)
    redirect('/planets')
  }
}

const show = async (req, res) => {
  const planet = await Planet.findById(req.params.id).populate('explorer')
  const explorers = await Explorer.find({})
  const planetExplorer = planet.explorer
  const explorerName = planetExplorer.map(
    (explorerMember) => explorerMember.name
  )

  const availableExplorers = explorers.filter((explorer) => {
    if (!explorerName.includes(explorer.name)) {
      return explorer
    }
  })
  res.render('planets/show', {
    title: 'Planet Detail',
    planet,
    availableExplorers
  })
}

module.exports = {
  newPlanet,
  create,
  index,
  show
}
