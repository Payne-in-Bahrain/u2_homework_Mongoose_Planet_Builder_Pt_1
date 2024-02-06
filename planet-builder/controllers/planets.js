const Planet = require('../models/planet')
const Explorer = require('../models/explorer')
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
    const planet = await Planet.findById(req.params.id).populate('explorers')
    const explorers = await Explorer.find({})
    const planetexplorers = planet.explorers
    const explorersNames = planetexplorers.map(
      (explorersMember) => explorersMember.name
    )

    const availableexplorers = explorers.filter((explorer) => {
      console.log(typeof explorer._id)
      if (!explorersNames.includes(explorer.name)) {
        return explorer
      }
    })
    res.render('planets/show', {
      title: 'planet Detail',
      planet,
      availableexplorers
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const index = async (req, res) => {
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
const newAnimal = async (req, res) => {
  try {
    const animal = await Planet.findById(req.params.id)
    animal.animals.push(req.body)
    await animal.save()
    res.redirect('/planets/' + animal._id)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = {
  newPlanet,
  createPlanet,
  show,
  newAnimal,
  index
}
