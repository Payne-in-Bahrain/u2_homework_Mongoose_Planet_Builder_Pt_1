const Planet = require('../models/planet')
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
  const planet = await Planet.findById(req.params.id)
  res.render('planets/show', { title: 'Planet Details', planet })
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
