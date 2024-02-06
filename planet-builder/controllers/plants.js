const Planet = require('../models/planet');



async function create(req, res) {
  const planet = await Planet.findById(req.params.id);
  // We can push (or unshift) subdocs into Mongoose arrays
  planet.plans.push(req.body);
  try {
    // Save any changes made to the movie doc
    await planet.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/planets/${planet._id}`);
}

module.exports = {
  create
};