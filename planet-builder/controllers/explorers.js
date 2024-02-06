const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

const newExplorer = (req, res) => {
  res.render('explorers/new', { title: 'New Explorer' })
}

const create = async (req, res) => {
  try {
    await Explorer.create(req.body)
    res.redirect('/explorers/new')
  } catch (error) {
    console.log(error)
    res.redirect('/explorers/new')
  }
}

const index = async (req, res) => {
  try {
    const explorers = await Explorer.find({})
    res.render('explorers/index', { title: 'Explorers', explorers })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

const add = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id)
    planet.explorers.push(req.body.explorerId)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/planets/${req.params.id}`)
  }
}

module.exports = { new: newExplorer, create, index, add }
