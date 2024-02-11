require('dotenv').config();  // Necessary if connection string is in a .env file
require('./config/database');  // Execute the code to connect to the db 

const Planet = require('./models/planet');

// Define an async function to create the movie in the database 
const createPlanet = async () => {
  try {

    const doc = await Planet.create({
      name: 'earth',
      size: "510.1 million km²",
      distanceFromSun: "147.47 million km",
      hasMoons: true,
    });
    
    console.log("Done creating planet", doc);
  } catch (err) {
    console.error(err);
  }
};

// Call the async function
createPlanet();