const Planet = require('../models/planet')

const create = async (req, res) => {
  const planet = await Planet.findById(req.params.id)
  req.body.poisonous = !!req.body.poisonous
  planet.plants.push(req.body)
  await planet.save()
  res.redirect(`/planets/${planet._id}`)
}

module.exports = {
  create
}
