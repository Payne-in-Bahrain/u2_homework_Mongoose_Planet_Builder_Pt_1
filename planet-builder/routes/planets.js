const express = require("express")
const router = express.Router()
//require
const planetsCtrl = require("../controllers/planets")

router.get("/new", planetsCtrl.newPlanet)
router.post("/", planetsCtrl.create)
//GET
router.get("/", planetsCtrl.index)
router.get("/:id", planetsCtrl.show)

module.exports = router
