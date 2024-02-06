require('dotenv').config() // Necessary if connection string is in a .env file
require('./config/database') // Execute the code to connect to the db

const Movie = require('./models/planet')

// Define an async function to create the movie in the database
const createPlanet = async () => {
  try {
    const doc = await Planet.create({})

    console.log('Done creating planet', doc)
  } catch (err) {
    console.error(err)
  }
}

// Call the async function
createPlanet()
