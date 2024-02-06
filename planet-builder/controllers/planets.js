const Planet = require("../models/planet");
const Explorer = require("../models/explorer");

const planetIndex = async (req, res) => {
  const title = "Discovered Planets";
  
  try {
    const planets = await Planet.find({});
    res.render("planets/index", {planets, title});
  } catch (error) {
    console.log("🚀 ~ index ~ error:", error)
    res.redirect("/");
  }
}

const newPlanet = (req, res) => {
  res.render("planets/new");
}

const createPlanet = async (req, res) => {
  const title = "New Planet Discovery";
  try {
    await Planet.create(req.body);
    console.log(req.body);
    res.redirect("/planets");
  } catch (error) {
    console.log("🚀 ~ newPlanet ~ error:", error)
    res.send(error.message);
  }
}

const planetDetails = async (req, res) => {
  const planetFound = await Planet.findOne({_id: req.params.id});
  const allExplorers = await Explorer.find({});
  console.log("🚀 ~ planetDetails ~ allExplorers:", allExplorers)
  
  res.render("planets/show", {planet: planetFound, explorer: allExplorers});
}

module.exports = {
  index: planetIndex,
  new: newPlanet,
  create: createPlanet,
  show: planetDetails
}