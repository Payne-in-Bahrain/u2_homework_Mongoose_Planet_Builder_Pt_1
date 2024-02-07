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

// createDummyData();

const Explorer = require("./models/explorer");

const createExplorer = async () => {
  try {
    const doc = await Explorer.create({name: "Samantha", age: "41"});
    console.log(doc);
  } catch (error) {
    console.log(error);
  }
}

// createExplorer();

const explorerLinkPlanet = async () => {
  try {
    const planet = await Planet.findOne({_id: "65bfd7798b6283aa94ac7def"});
    // console.log(planet.name);

    planet.crew.push("65c3c21b2bee7b3f1bec14c9");
    planet.crew.push("65c3c1eeee819a04832ddc95")
    planet.crew.push("65c3c27c5897a60213084f01");
    
    planet.save();

  } catch (error) {
    
  }
}
// explorerLinkPlanet();