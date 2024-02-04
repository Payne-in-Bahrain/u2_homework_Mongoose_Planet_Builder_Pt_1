require('dotenv').config() // Necessary if connection string is in a .env file
require('./config/database') // Execute the code to connect to the db

const Planet = require('./models/planet')

const createPlanet = async () => {
  try {
    const doc = await Planet.create({
      name: 'Earth',
      climate: 'Varies',
      population: 8000000000,
      Possible_alien_life: true
    })

    console.log('Done creating movie', doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createPlanet()
