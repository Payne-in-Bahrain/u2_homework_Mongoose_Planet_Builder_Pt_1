require("dotenv").config();
require("./config/database");

// const Planet = require("./models/planet");

// const createDummyData = async () => {
//   try { 
//     const doc = await Planet.create({});
//     console.log("🚀 ~ createDummyData ~ doc:", doc)
//   }catch(error) {
//     console.log(error);
//   }
// }

// createDummyData();

const Explorer = require("./models/explorer");

const createExplorer = async () => {
  try {
    const doc = await Explorer.create({name: "John", age: "35"});
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
}

createExplorer();