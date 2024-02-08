const Planet = require('../models/planet')
const Explorer = require('../models/explorer')
const newPlanet = (req, res) => {
  const title = 'New Planet'
  res.render('planets/new', { title })
}
const create = async (req, res) => {
  try {
    await Planet.create(req.body)
    res.redirect('/planets/new')
  } catch (error) {
    res.redirect('/planets/new')
  }
}
const show = async (req, res) => {
  const planet = await Planet.findById(req.params.id).populate('explorers')
  const explorers = await Explorer.find({})
  const planetExplorers = planet.explorers
  const explorerName = planetExplorers.map(
    (planetExplorer) => planetExplorer.name
  )
  const availableExplorers = explorers.filter((explorer) => {
    if (!explorerName.includes(explorer.name)) {
      return explorer
    }
  })

  res.render('planets/show', {
    title: 'Planet Details',
    planet,
    availableExplorers
  })
}

const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    const title = 'All Planets'
    res.render('planets/index.ejs', { planets, title })
  } catch (error) {
    res.redirect('/')
  }
}

module.exports = { index, newPlanet, create, show }
