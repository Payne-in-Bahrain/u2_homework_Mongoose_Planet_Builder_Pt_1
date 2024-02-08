const Planet = require("../models/planet")
const Explorer = require("../models/explorer")

const newPlanet = (req, res) => {
  const title = "Add Planet"
  res.render("planets/new", { title })
}
const create = (req, res) => {
  try {
    Planet.create(req.body)
    res.redirect("/planets/new")
  } catch (error) {
    console.log("THIS IS THE ERROE~! " + error)
    res.redirect("/planets/new")
  }
}

async function show(req, res) {
  const planet = await Planet.findById(req.params.id).populate("explorer")
  const explorers = await Explorer.find({})
  const explorerName = planet.explorer
  const explorerNames = planet.explorer.map((explorer) => explorer.name)
  const avalibleExplorer = explorers.filter((explorer) => {
    if (!explorerNames.includes(explorer.name)) {
      return explorer.name
    }
  })
  res.render("planets/show", {
    title: "Planet Detail",
    planet,
    explorers,
    avalibleExplorer,
  })
}

const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    const title = "All Planets"
    console.log(planets)
    res.render("planets/index.ejs", { planets, title })
  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
}

module.exports = {
  newPlanet,
  create,
  index,
  show,
}
