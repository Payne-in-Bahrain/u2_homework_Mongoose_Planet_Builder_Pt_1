var express = require("express")
var router = express.Router()

const planetsController = require("../controllers/planets")

/* GET planets listing. */
// router.get("/:id", planetsController.show) //show one planet
router.get("/new", planetsController.newPlanet)
router.post("/", planetsController.create)
router.get("/", planetsController.index)
router.get("/:id", planetsController.show) //show one planet

module.exports = router
