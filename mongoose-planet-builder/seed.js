require('dotenv').config() // Necessary if connection string is in a .env file
require('./config/database') // Execute the code to connect to the db

const Planet = require('./models/planet')

// Define an async function to create the planet in the database
const createPlanet = async () => {
  try {
    const doc = await Planet.create({
      name: 'Jomiplu',
      numberofmoons: 2,
      fauna: ['Jaboons', 'Sparukas'],
      populated: true
    })

    console.log('Done creating planet', doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createPlanet()
