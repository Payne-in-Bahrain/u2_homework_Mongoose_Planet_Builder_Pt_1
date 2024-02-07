const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

const newExplorer = async (req, res) => {
  //Sort expplorer by their name
  const explorers = await Explorer.find({}).sort('name')
  res.render('explorers/new', { title: 'Explorer', explorers })
}

const create = async (req, res) => {
  try {
    await Explorer.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect('/explorers/new')
}

const addToExplorers = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id)

    planet.explorers.push(req.body.explorerId)

    await planet.save()

    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect('/explorers')
  }
}

const index = async (req, res) => {
  try {
    const explorers = await Explorer.find({})
    const title = 'All planets'

    res.render('explorers/index', { explorers, title })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

module.exports = {
  new: newExplorer,
  create,
  addToExplorers,
  index
}
