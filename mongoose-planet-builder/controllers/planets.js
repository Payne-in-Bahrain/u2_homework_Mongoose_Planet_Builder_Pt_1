// define a function called newPlanet that renders the new.ejs template

const PlanetModel = require('../models/planet')
const Explorer = require('../models/explorer')

const newPlanet = (req, res) => {
  const title = 'New planet addition'
  res.render('planets/new.ejs', { title })
}

const index = async (req, res) => {
  const title = 'All Planets'
  try {
    const planetList = await PlanetModel.find({})
    res.render('planets/index.ejs', { planetList, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const create = async (req, res) => {
  console.log('this is the request body:', req.body)
  req.body.populated = !!req.body.populated
  for (let key in req.body) {
    if (req.body[key] === '') {
      delete req.body[key]
    }
  }
  if (req.body.fauna) {
    req.body.fauna = req.body.fauna.split(',')
    console.log('this is the fauna array', req.body.cast)
  }

  try {
    await PlanetModel.create(req.body)
    res.redirect('/planets/new')
  } catch (error) {
    console.log(error)
    res.redirect('/planets/new')
  }
}

const show = async (req, res) => {
  const planet = await PlanetModel.findById(req.params.id).populate('astro')
  const explorers = await Explorer.find({})
  const planetAstro = planet.astro
  //create a new array of just the names from the movieCast
  const astroNames = planetAstro.map((astroMember) => astroMember.name)

  const availableExplorers = explorers.filter((explorer) => {
    console.log(typeof explorer._id)
    if (!astroNames.includes(explorer.name)) {
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
