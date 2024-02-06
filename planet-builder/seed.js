require('dotenv').config()
require('./config/database') // database

const Planet = require('./models/planet')

const populatePlanets = async () => {
  try {
    const planetDoc = await Planet.create({
      name: 'Moon',
      climate: 'Tropical',
      population: 30301
    })
    console.log(planetDoc)
  } catch (error) {
    console.log(error)
  }
}

populatePlanets()
