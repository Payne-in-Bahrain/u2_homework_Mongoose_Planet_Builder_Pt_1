const explorer = require("../models/explorer")
const Planett = require("../models/planet")

async function newExplorer(req, res) {
  const explorers = await explorer.find({}).sort("name")
  res.render("Exploreres/new", { title: "Add Explorer", explorers })
}

async function create(req, res) {
  try {
    await explorer.create(req.body)
  } catch (err) {
    console.log(err)
  }
  res.redirect("/explorers/new")
}

const addToExplorer = async (req, res) => {
  try {
    //find the movie that I want to add the performers to
    const planet = await Planett.findById(req.params.id)
    //added the id of the performer I selected to the cast field on the movie document
    planet.explorer.push(req.body.explorerId)
    //save the changes made to the movie
    await planet.save()
    //redirect to the show page for the movie
    res.redirect(`/planets/${planet._id}`)
  } catch (error) {
    console.log(error)
    res.redirect("/planets")
  }
}

module.exports = {
  new: newExplorer,
  create,
  addToExplorer,
}
