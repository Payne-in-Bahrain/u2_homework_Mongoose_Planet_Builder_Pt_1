const Planets = require("../models/planet");

const newPlant = (req, res) => {
  // const planet = await Planets.findById(req.params.id);
  // planet.plants.push(req.body);
  // await planet.save();
  // res.redirect(`/planets/$00`);
  res.redirect("/planets");
}

module.exports = {
  new: newPlant,
}