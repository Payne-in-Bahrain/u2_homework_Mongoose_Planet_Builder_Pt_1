const Planet = require('../models/planet')
const Explorer = require('../models/explorer')

const newPlanet = (req, res) => {
  const title = 'New Planet'
  res.render('planets/new', { title })
}

async function show(req, res) {
  const planet = await Planet.findById(req.params.id)
  res.render('planets/show', { title: 'Planet Detail', planet })
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

async function show(req, res) {
  const planet = await Planet.findById(req.params.id).populate('explorers')
  const explorers = await Explorer.find({})
  const planetExplorers = planet.explorers
  //create a new array of just the names from the movieCast
  const explorerName = planetExplorers.map(
    (explorerMember) => explorerMember.name
  )

  const availableExplorers = explorers.filter((explorer) => {
    if (!explorerName.includes(explorer.name)) {
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
  newPlanet,
  create,
  index,
  show
}
