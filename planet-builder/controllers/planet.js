const Planet = require('../models/planet')

const index = async (req, res) => {
  const planets = await Planet.find({})
  console.log(planets)
  res.render('planets/index', { title: 'Planets', planets })
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
  new: newPlanet,
  create
}
