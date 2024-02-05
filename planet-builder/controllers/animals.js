const Planet = require('../models/planet')

const create = async (req, res) => {
  // find planet by id
  if(req.body.population > 0 && req.body.extinct === 'true'){
    console.log('inside the if')
    req.body.population = 0
  }
  try {
    let planet = await Planet.findById(req.params.id)
    planet.animals.push(req.body)
    planet.animals.sort()
    await planet.save()
    res.redirect(`/planets/${planet._id}`)
  }catch(error){
    console.log(error)
    res.status(500).send(error.message)
  }
}

module.exports = {create}