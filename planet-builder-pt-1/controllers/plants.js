const Planet = require("../models/planets")

const create = async (req, res) => {
  try {
    
    const planet = await Planet.findById(req.params.id)
    // console.log('Planeta: ', planet);

    planet.plants.push(req.body)
   
    const updatedPlants = await planet.save()
    res.redirect(`/planets/${updatedPlants._id}`)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
}

module.exports = {
  create,
}
