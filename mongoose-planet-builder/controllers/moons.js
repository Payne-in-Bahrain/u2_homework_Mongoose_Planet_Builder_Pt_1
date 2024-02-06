const Planet = require('../models/planet');

const createMoon = async(req,res)=>{
  //find the planet by id
  try {
    let planet = await Planet.findById(req.params.id)
    planet.moons.push(req.body)
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  } catch(error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = {
  createMoon
};
