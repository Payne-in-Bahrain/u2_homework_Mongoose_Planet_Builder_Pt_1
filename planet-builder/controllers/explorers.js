const Explorer = require("../models/explorer");
const Planet = require("../models/planet");

const explorerForm = (req, res) => {
  res.render("explorers/new");
}

const showAllExplorers = async (req, res) => {
  const explorers = await Explorer.find({});
  console.log(explorers);
  res.render("explorers/show", {explorers});
}

const addExplorer = async (req, res) => {
  await Explorer.create(req.body);
  res.redirect("/explorers");
}

const destinationPlanet = async (req, res) => {
  const planet = await Planet.findById(req.params.planetId);
  planet.crew.push(req.body.crew);
  await planet.save();
  res.redirect("/planets/"+planet._id);
}

module.exports = {
  new: explorerForm,
  index: showAllExplorers,
  create: addExplorer,
  destinationPlanet
}