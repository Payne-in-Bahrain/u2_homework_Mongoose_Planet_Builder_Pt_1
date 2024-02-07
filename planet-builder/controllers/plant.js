const Planet = require('../models/planet')

const create = async (req, res) => {
  try {
    req.body.poisonous = !!req.body.poisonous
    let planet = await Planet.findById(req.params.id)
    planet.plant.push(req.body)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = {
  create
}
