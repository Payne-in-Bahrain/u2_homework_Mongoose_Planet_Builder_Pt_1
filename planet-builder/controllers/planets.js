const Planet = require('../models/planet')
const Explorer = require('../models/explorer')

const newPlanet = async (req, res) => {
  try {
    const title = 'Add Planet'
    res.render('planets/new', { title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const create = async (req, res) => {
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
    res.render('planets/index', { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const show = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id).populate('explorers')
    const title = planet.name
    if (planet.plants.length) {
      planet.plants.sort((a, b) => {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()
        if (nameA < nameB) {
          return -1
        }
        if (nameA > nameB) {
          return 1
        }
        return 0
      })
    }
    const explorers = await Explorer.find({})
    const planetExplorers = planet.explorers
    const explorersNames = planetExplorers.map((castMember) => castMember.name)

    const newExplorers = explorers.filter((explorer) => {
      if (!explorersNames.includes(explorer.name)) {
        return explorer
      }
    })
    res.render('planets/show', { title, planet, newExplorers })
  } catch (error) {
    console.log(error)
    res.redirect('/planets')
  }
}

module.exports = { newPlanet, create, index, show }
