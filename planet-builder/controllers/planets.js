const Planet = require("../models/planet");

const index = async (req, res) => {
  const title = "Discovered Planets";
  
  try {
    const planets = await Planet.find({});
    res.render("planets/index", {planets, title});
  } catch (error) {
    console.log("🚀 ~ index ~ error:", error)
    res.redirect("/");
  }
}

module.exports = {
  index
}