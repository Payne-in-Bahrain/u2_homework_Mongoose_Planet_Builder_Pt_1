// define a function called newMovie that renders the new.ejs template

const PlanetModel = require('../models/planet')

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

module.exports = {
  newPlanet,
  create,
  index
}
