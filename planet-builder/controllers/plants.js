const Planet = require('../models/planet')

const create = async (req, res) => {
  try {
    let plant = await Planet.findById(req.params.id)
    req.body.poisonous = !!req.body.poisonous
    plant.plants.push(req.body)
    await plant.save()
    res.redirect(`/planets/${plant._id}`)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = { create }
