const Planet = require("../models/planets")

const newPlanet = (req, res) => {
  const title = "Add a Planet"
  res.render("planets/new", {
    title,
  })
}

const create = async (req, res) => {
  console.log("this is a request body: ", req.body)

  for (let key in req.body) {
    if (!req.body[key] === '') {
      delete req.body[key];
    }
  }

  try {
    
    req.body.nowShowing = !!req.body.nowShowing

    
    if (req.body.cast) {
   
      req.body.cast = req.body.cast.trim()
      req.body.cast = req.body.cast.split(/\s*,\s*/)
      console.log("this is a cast of arr: ", req.body.cast)
    }

    const planet = new Planet(req.body)

    if (planet.title) {
      planet.title = planet.title.toUpperCase()
    }

    await planet.save()
    console.log(planet)
    res.redirect("/planets/new")
  } catch (err) {
    console.error(err)
    res.redirect("/planets/new")
  }
}

const index = async (req, res) => {
  try {
    const planets = await Planet.find({})
    console.log(planets)
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
  index
}
