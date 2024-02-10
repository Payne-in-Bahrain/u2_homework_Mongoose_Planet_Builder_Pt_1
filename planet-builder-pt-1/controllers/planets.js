const Planet = require("../models/planets")

const newPlanet = (req, res) => {
  const title = "Add a Planet"
  res.render("planets/new", {
    title,
  })
}

const create = async (req, res) => {
  try {
    const planet = new Planet(req.body)

    await planet.save()

    res.redirect("/")
  } catch (err) {
    console.error(err)
    res.redirect("/planets/new")
  }
}

const index = async (req, res) => {
  try {
    const planets = await Planet.find({})

    const title = "All planet"
    res.render("planets", {
      planets,
      title,
    })
  } catch (error) {
    console.error(error)
    res.redirect("/")
  }
}

module.exports = {
  new: newPlanet,
  create,
  index,
}
