const express = require("express")
const router = express.Router()
const planetsCtrl = require("../controllers/planets")

router.get("/", planetsCtrl.index)

router.get("/new", planetsCtrl.newPlanet)

router.post("/", planetsCtrl.create)

router.get("/:id", planetsCtrl.show)

module.exports = router
