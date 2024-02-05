const Planet = require('../models/planet')

const newPlanet = (req, res) => {
  const title = 'Add a Planet'
  res.render('planets/new', { title })
}

const createPlanet = async (req, res) => {
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

const show = async (req, res) => {
  try {
    const title = 'All Planets'
    const planets = await Planet.find({})
    console.log(planets)
    res.render('planets/index', { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

module.exports = {
  newPlanet,
  createPlanet,
  show
}
