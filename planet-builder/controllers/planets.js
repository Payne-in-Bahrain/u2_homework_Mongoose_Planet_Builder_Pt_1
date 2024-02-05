const Planet = require("../models/planet");

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
  
  res.render("planets/show", {planet: planetFound});
}

module.exports = {
  index: planetIndex,
  new: newPlanet,
  create: createPlanet,
  show: planetDetails
}