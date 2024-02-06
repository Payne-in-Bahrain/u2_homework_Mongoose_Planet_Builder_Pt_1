var express = require("express")
var router = express.Router()

const explorersController = require("../controllers/explorers")

/* GET planets listing. */
// router.get("/:id", planetsController.show) //show one planet
router.get("/explorers/new", explorersController.newExplorer)
router.post("/explorers", explorersController.create)
router.get("/explorers", explorersController.index)
// router.get("/:id", explorersController.show) //show one planet
router.post("/planets/:planetId/explorers", explorersController.addToExplorers)

module.exports = router
