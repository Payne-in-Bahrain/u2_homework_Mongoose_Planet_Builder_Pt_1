const Planet = require('../models/planet')

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

module.exports = { newPlanet, create, index }
