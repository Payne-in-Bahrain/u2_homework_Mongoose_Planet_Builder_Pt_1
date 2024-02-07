const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

// const newPlanet = (req, res) => {
//   const title = 'New planet addition'
//   res.render('planets/new.ejs', { title })
// }

const newExplorer = async (req, res) => {
  //Sort explorers by their name
  const explorers = await Explorer.find({}).sort('name')
  res.render('explorers/new', { title: 'Add Explorer', explorers })
}

const index = async (req, res) => {
  const title = 'All Explorers'
  try {
    const explorerList = await Explorer.find({})
    res.render('explorers/index.ejs', { explorerList, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const create = async (req, res) => {
  try {
    await Explorer.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/explorers/new')
}

const addToAstro = async (req, res) => {
  try {
    //find the movie that I want to add the performers to
    const planet = await Planet.findById(req.params.id)
    //added the id of the performer I selected to the cast field on the movie document
    planet.astro.push(req.body.explorerId)
    //save the changes made to the movie
    await planet.save()
    //redirect to the show page for the movie
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/planets')
  }
}

module.exports = {
  newExplorer,
  create,
  addToAstro,
  index
}
