var express = require("express")
var router = express.Router()

const plantsController = require("../controllers/plants.js")

/* GET planets listing. */
// router.get("/new", planetsController.newPlanet)
router.post("/planets/:id/plants", plantsController.create)
// router.get("/", planetsController.index)

module.exports = router
