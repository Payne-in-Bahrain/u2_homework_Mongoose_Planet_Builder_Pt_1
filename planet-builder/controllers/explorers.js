const Explorer = require("../models/explorer")
const Planet = require("../models/planet")

const newExplorer = async (req, res) => {
  const explorers = await Explorer.find({})

  res.render("explorers/new", { explorers })
}

const creat = async (req, res) => {
  const title = "t"
  try {
    await Explorer.create(req.body)
  } catch (error) {
    console.log(error)
  }
  res.redirect("/explorers/new")
}

const addExplorer = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id)
    planet.explorer.push(req.body.selectedExplorer)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect("/")
  }
}
module.exports = {
  newExplorer,
  creat,
  addExplorer,
}
