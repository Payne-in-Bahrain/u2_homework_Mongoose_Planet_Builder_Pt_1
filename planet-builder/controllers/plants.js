const Planets = require("../models/planet")

const create = async (req, res) => {
  req.body.poisonous = !!req.body.poisonous
  try {
    const planet = await Planets.findById(req.params.id)
    planet.plants.push(req.body)
    planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}

module.exports = { create }
