const Planet = require('../models/planet')

const newPlanet = (req, res) => {
  res.render('planets/new')
}

const create = async (req, res) => {
  for(let key in req.body){
    if (req.body[key] === ''){
      delete req.body[key]
    }
  }
  try {
    await Planet.create(req.body)
    res.redirect('/planets/new')
    console.log(req.body)

  } catch (error) {
    console.log(error)
    res.redirect('/planets/new')
  }
}

const index = async(req, res) => {
  try {
    const planets = await Planet.find({});
    res.render('planets/index.ejs', { planets })
  } catch(error){
    console.log(error)
    res.redirect('/')
  }
}
module.exports = {newPlanet, create, index}