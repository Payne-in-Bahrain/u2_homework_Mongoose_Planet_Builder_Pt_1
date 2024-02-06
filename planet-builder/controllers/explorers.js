const Explorer = require("../models/explorer");

const explorerForm = (req, res) => {
  res.send("Show Form to add new explorer");
}

const showAllExplorers = (req, res) => {
  res.send("All Explorers List");
}

const addExplorer = (req, res) => {
  res.send("New Explorer Added to DB");
}

const destinationPlanet = (req, res) => {
  res.send("Explorer associated with planet");
}

module.exports = {
  newForm: explorerForm,
  new: showAllExplorers,
  create: addExplorer,
  destinationPlanet
}