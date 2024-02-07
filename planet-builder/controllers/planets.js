const Planet = require('../models/planet')
const Explorer = require('../models/explorer')

const newPlanet = (req, res) => {
  const title = 'New Planet'
  res.render('planets/new', { title })
}

const create = async (req, res) => {
  console.log('this is the request body', req.body)
  req.body.Possible_alien_life = !!req.body.Possible_alien_life
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
    const title = 'All planets'
    console.log(planets)
    res.render('planets/index', { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const show = async (req, res) => {
  const planet = await Planet.findById(req.params.id).populate('explorers')
  const explorers = await Explorer.find({})
  const planetExplorer = planet.explorers
  //create a new array of just the names from the movieCast
  const explorersNames = planetExplorer.map(
    (explorerMember) => explorerMember.name
  )

  const availableExplorers = explorers.filter((explorer) => {
    console.log(typeof explorer._id)
    if (!explorersNames.includes(explorer.name)) {
      return explorer
    }
  })
  res.render('planets/show', {
    title: 'Planet Detail',
    planet,
    availableExplorers
  })
}

module.exports = {
  new: newPlanet,
  create,
  index,
  show
}
