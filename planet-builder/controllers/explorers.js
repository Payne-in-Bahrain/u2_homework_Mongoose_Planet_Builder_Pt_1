const Explorer = require('../models/explorer')
const Planet = require('../models/planet')

const index = async (req, res) => {
  const explorers = await Explorer.find({})
  res.json(explorers)
}

const newExplorer = async (req, res) => {
  const explorers = await Explorer.find({})
  res.render('explorers/new', { title: 'Add Explorer', explorers })
}

const create = async (req, res) => {
  try {
    const explorer = await Explorer.create(req.body)
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
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  index,
  new: newExplorer,
  create,
  addToExplorers
}
