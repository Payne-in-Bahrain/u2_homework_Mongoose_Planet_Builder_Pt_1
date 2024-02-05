const Planets = require("../models/planet");

const newPlant = async (req, res) => {
  const planet = await Planets.findById(req.params.id);

  planet.plants.push(req.body);
  await planet.save();
  console.log(planet);
  res.redirect(`/planets/${req.params.id}`);
}

module.exports = {
  create: newPlant,
}