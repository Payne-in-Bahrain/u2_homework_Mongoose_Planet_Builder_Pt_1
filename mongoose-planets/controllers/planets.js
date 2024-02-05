const Planet = require('../models/planet')

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

module.exports = {
  newPlanet,
  create,
  index
}
