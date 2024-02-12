const Planet = require("../models/planets")
const explorer = require("../models/explorer")

const create = async (req, res) => {
  try {
    await explorer.create(req.body)
   
  } catch (err) {
    console.log(err)
  }
    res.redirect("explorers/new")
  
}

const newExplorer = async (req, res) => {
  const explorers = await explorer.find({});

  res.render("explorers/new" , {explorers})
}

const addToExplorer = async (req,res)=>{
  const exp = await Planet.findById(req.params.id);
  exp.explorers.push(req.body.name)
  // exp.explorers.age.push(parseInt(req.body.age))

  res.render('/explorers/new' , {exp})
}

module.exports = {
  create,
  new: newExplorer,
  addToExplorer
}
