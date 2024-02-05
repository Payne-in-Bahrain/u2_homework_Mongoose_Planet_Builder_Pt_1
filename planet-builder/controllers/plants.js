const Planet = require('../models/planet')

const create = async (req, res) => {
  req.body.poisonous = !!req.body.poisonous
  try {
    let planet = await Planet.findById(req.params.id)
    planet.plant.push(req.body)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  create
}
