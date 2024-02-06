const Planet = require('../models/planet')
const Explorer = require('../models/explorer')
const newExplorer = async (req, res) => {
  const explorers = await Explorer.find({}).sort('name')
  res.render('explorers/new', { title: 'Add a new Explorers', explorers })
}
const showExplorer = async (req, res) => {
  try {
    const explorers = await Explorer.find({}).sort('name')
    res.render('explorers/index', { title: 'All Explorers', explorers })
  } catch (err) {
    console.error(err)
    res.redirect('/')
  }
}

const createExplorer = async (req, res) => {
  try {
    const existingExplorer = await Explorer.findOne({ name: req.body.name })

    if (existingExplorer) {
      res.redirect('/explorers/new')
    } else {
      await Explorer.create(req.body)
      res.redirect('/explorers/new')
    }
  } catch (err) {
    console.error(err)
    res.redirect('/explorers/new')
  }
}
const submitExplorer = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id)
    const explorerId = req.body.explorerId

    if (!planet.explorers.includes(explorerId)) {
      planet.explorers.push(explorerId)
      await planet.save()
    }

    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.error(error)
    res.redirect('/planets')
  }
}

module.exports = {
  newExplorer,
  showExplorer,
  createExplorer,
  submitExplorer
}
