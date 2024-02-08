const Planet = require("../models/planet");
const Explorer = require("../models/explorer");

const planetIndex = async (req, res) => {
  const title = "Discovered Planets";
  
  try {
    const planets = await Planet.find({});
    res.render("planets/index", {planets, title});
  } catch (error) {
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
    res.send(error.message);
  }
}

const planetDetails = async (req, res) => {
  const planetFound = await Planet.findOne({_id: req.params.id}).populate("crew");
  const allExplorers = await Explorer.find({});

  const crew = planetFound.crew.map(value => value.name);
  
  // maybe there is a better way to do the following, but this is what I know right now
  const availableCrew = allExplorers.filter((value) => {
    if(!crew.includes(value.name)) {
      return value;
    }
  });

  
  res.render("planets/show", {planet: planetFound, explorer: availableCrew});
}

module.exports = {
  index: planetIndex,
  new: newPlanet,
  create: createPlanet,
  show: planetDetails
}