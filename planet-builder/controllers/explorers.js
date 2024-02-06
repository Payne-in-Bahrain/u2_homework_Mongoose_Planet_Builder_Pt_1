const Explorer = require("../models/explorer")
const Planet = require("../models/planet")

async function newExplorer(req, res) {
  const explorers = await Explorer.find({})
  res.render("explorers/new", { explorers })
}

async function create(req, res) {
  try {
    await Explorer.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect("/explorers/new")
}

const addToExplorers = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.planetId)
    planet.explorers.push(req.body.id)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/planets`)
  }
}

const index = async (req, res) => {
  try {
    const explorers = await Explorer.find()
    res.render("explorers/index", { explorers })
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  addToExplorers,
  create,
  index,
  newExplorer,
}
