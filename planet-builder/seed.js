require("dotenv").config();
require("./config/database");

const Planet = require("./models/planet");

const createDummyData = async () => {
  try { 
    const doc = await Planet.create({});
    console.log("🚀 ~ createDummyData ~ doc:", doc)
  }catch(error) {
    console.log(error);
  }
}

createDummyData();