const Planet = require('../models/planet')

const create = async (req, res) => {
  try {
    let planet = await Planet.findById(req.params.id)
    req.body.poisonous = !!req.body.poisonous

    planet.plants.push(req.body)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  create
}
