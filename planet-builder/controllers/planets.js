const Planet = require('../models/planet')

const newPlanet = (req, res) => {
  const title = 'New Planet'
  res.render('planets/new', { title })
}
const create = async (req, res) => {
  try {
    await Planet.create(req.body)
    console.log(req.body)
    res.redirect('/planets/new')
  } catch (error) {
    res.redirect('/planets/new')
  }
}

const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    console.log(planets)
    const title = 'All Planets'
    //render
    res.render('planets/index.ejs', { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

module.exports = {
  newPlanet,
  create,
  index
}
