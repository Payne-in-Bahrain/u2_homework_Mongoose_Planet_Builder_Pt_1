const PlantM = require("../models/planet")

module.exports = {
  create,
}

async function create(req, res) {
  const plant = await PlantM.findById(req.params.id)
  // We can push (or unshift) subdocs into Mongoose arrays
  plant.plants.push(req.body)
  try {
    // Save any changes made to the movie doc
    await plant.save()
  } catch (err) {
    console.log(err)
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/planets/${plant._id}`)
}
