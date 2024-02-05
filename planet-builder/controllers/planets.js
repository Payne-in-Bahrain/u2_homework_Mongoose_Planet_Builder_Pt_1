const Planet = require('../models/planet')

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
    const planet = await Planet.findById(req.params.id)
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
    res.render('planets/show', { title, planet })
  } catch (error) {
    console.log(error)
    res.redirect('/planets')
  }
}

module.exports = { newPlanet, create, index, show }
