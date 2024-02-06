const Planet = require('../models/planet')
const Explorer = require('../models/explorer')

const newPlanet = (req, res) => {
  const title = 'Add a Planet'
  res.render('planets/new', { title })
}

const create = async (req, res) => {
  for (let key in req.body) {
    if (req.body[key] === '') {
      delete req.body[key]
    }
  }
  try {
    await Planet.create(req.body)
    res.redirect('/planets/new')
  } catch (error) {
    console.log(error)
    res.redirect('/planets/new')
  }
}
const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    const title = 'All Planets'
    res.render('planets/index.ejs', { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const show = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id).populate('explorer')

    const explorers = await Explorer.find({})
    const planetExplorers = planet.explorer
    const explorerNames = planetExplorers.map(
      (planetExplorer) => planetExplorer.name
    )

    const availableExplorers = explorers.filter((explorer) => {
      if (!explorerNames.includes(explorer.name)) {
        return explorer
      }
    })

    res.render('planets/show', {
      title: 'Planet Details',
      planet,
      availableExplorers
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { newPlanet, create, index, show }
