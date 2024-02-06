const Planet = require('../models/planet')

const index = async (req, res) => {
  const p1 = await Planet.find({})
  res.render('planets/index', { p: p1, title: 'All Planets' })
  // console.log('Planets are :', p1s)
}

const newPlanet = (req, res) => {
  res.render('planets/newPlanet', { title: 'New Planet' })
}

const addNewPlanet = async (req, res) => {
  try {
    const newPlanet = new Planet(req.body)
    await newPlanet.save()
    res.redirect('/planets')
  } catch (error) {
    if (error.name === 'ValidationError') {
      // res.status(500).send('Something went wrong')
      let errors = {}

      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message
      })

      return res.status(400).send(errors)
    }
    res.status(500).send('Something went wrong')
  }
}

module.exports = { index, newPlanet, addNewPlanet }
