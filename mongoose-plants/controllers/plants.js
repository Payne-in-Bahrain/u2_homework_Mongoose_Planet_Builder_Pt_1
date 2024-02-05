const Planet = require('../models/planet');

const create = async (req, res) => {
    req.body.poisonous = !!req.body.poisonous;
    try {
      let planet = await Planet.findById(req.params.id);
      planet.plants.push(req.body);
      await planet.save();
      res.redirect(`/planets/${planet._id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  }

  module.exports = {
    create
  };