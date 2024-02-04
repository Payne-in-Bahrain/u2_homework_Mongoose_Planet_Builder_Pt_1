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

module.exports = { newPlanet, create, index }
