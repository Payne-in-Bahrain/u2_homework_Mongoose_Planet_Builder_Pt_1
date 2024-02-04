//define a function called newMovie that renders the new.ejs tamplate
const Planet = require("../models/planet")

const newPlanet = (req, res) => {
  const title = "Add Planet"
  res.render("planets/new", { title })
}
const create = async (req, res) => {
  console.log("this is the request body", req.body)

  for (let key in req.body) {
    if (req.body[key] === "") {
      delete req.body[key]
    }
  }
  // create the movie in the database by using the create method

  try {
    await Planet.create(req.body)
    res.redirect("/planets/new")
  } catch (error) {
    console.log(error)
    res.redirect("/planets/new")
  }
}
const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    const title = "All planets"
    console.log(planets)
    //render
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
}
