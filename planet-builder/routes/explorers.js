const express = require("express");
const router = express.Router();
const explorersCtrl = require("../controllers/explorers");

// GET /explorers/new: Display a form to add a new explorer.
router.get("/explorers/new", explorersCtrl.new);
// GET /explorers: List all explorers.
router.get("/explorers", explorersCtrl.index);
// POST /explorers: Create a new explorer.
router.post("/explorers/new", explorersCtrl.create);
// POST /planets/:planetId/explorers: Allow users to submit the explorer id in the request body to associate the explorer with the specified planet.
router.post("/planets/:planetId/explorers", explorersCtrl.destinationPlanet)

module.exports = router;